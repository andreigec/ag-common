import { AxiosError } from 'axios';

import { retryHttpCodes, retryHttpMs } from '../../../common/const';
import { notEmpty } from '../../../common/helpers/array';
import { sleep } from '../../../common/helpers/sleep';
import { getCookieString } from '../cookie';
import { AxiosWrapperLite, User } from '../jwt';
import { getLocalStorageItem } from '../useLocalStorage';
import { ICallOpenApi, OverrideAuth } from './types';

/**
 * get the id_token from provided value, or cookie, or LS
 */
export function getIdTokenAuthHeaderRaw({
  overrideAuth,
}: {
  overrideAuth?: OverrideAuth;
}) {
  let idToken: string | undefined;

  //if override supplied will only use that and not refresh
  if (overrideAuth?.id_token) {
    idToken = overrideAuth?.id_token;
  } else {
    idToken = getCookieString({
      name: 'id_token',
      defaultValue: '',
    });
    if (!idToken) {
      const userLs = getLocalStorageItem<User | undefined>('user', undefined);
      if (userLs?.jwt?.id_token) {
        idToken = userLs.jwt.id_token;
      }
    }
  }
  return idToken;
}

/**
 * get id_token, and then refresh
 */
async function getIdTokenAuthHeader({
  overrideAuth,
  refreshToken,
}: {
  refreshToken: () => Promise<User | undefined>;
  overrideAuth?: OverrideAuth;
}) {
  let idToken = getIdTokenAuthHeaderRaw({ overrideAuth });

  //if we have a cookie token, can try to refresh
  if (idToken) {
    const updated = await refreshToken();
    if (updated?.jwt?.id_token) {
      idToken = updated?.jwt?.id_token;
    }
  }

  return idToken;
}

export const callOpenApi = async <T, TDefaultApi>(
  p: ICallOpenApi<T, TDefaultApi>,
): Promise<AxiosWrapperLite<T>> => {
  const { func, apiUrl, logout, newDefaultApi, headers } = p;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let error: AxiosError<unknown, any> | undefined;
  let data: T | undefined = undefined;
  const config: {
    basePath: string;
    baseOptions: Record<string, Record<string, string>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: { pre: (a: any) => any }[];
  } = {
    basePath: apiUrl,
    baseOptions: { headers: { authorization: '', ...(headers || {}) } },
    middleware: [],
  };

  const idToken = await getIdTokenAuthHeader(p);
  if (idToken) {
    config.baseOptions.headers.authorization = `Bearer ${idToken}`;
    config.middleware = [
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pre: (oldFetchParams: any) => {
          oldFetchParams.init.headers = {
            authorization: `Bearer ${idToken}`,
            ...oldFetchParams.init.headers,
          };
        },
      },
    ];
  }

  const cl = newDefaultApi(config);
  let errorCount = 0;
  const errorMax = 3;

  while (errorCount <= errorMax) {
    errorCount += 1;
    try {
      // eslint-disable-next-line no-await-in-loop
      const resp = await func(cl);
      if (resp.status < 400) {
        data = resp.data;
        break;
      }

      throw new AxiosError(resp.statusText, resp.status?.toString() || '500');
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ae = e as AxiosError<unknown, any>;
      const status = Number(ae.code ?? ae.response?.status ?? 500);
      const errorMessage = [
        ae.status ?? '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ae.response?.data as any)?.toString() ?? '',
        ae.response?.statusText?.toString() ?? '',
        ae.response?.status?.toString() ?? '',
        ae.message?.toString() ?? '',
      ]
        .filter(notEmpty)
        .sort((a, b) => (a.length < b.length ? -1 : 1))
        .join('\n');

      if (status === 403 || status === 401) {
        logout();
        return {
          error: ae,
          data: undefined,
        };
      }

      if (!retryHttpCodes.includes(status) || errorCount === errorMax) {
        error = { ...ae, message: errorMessage };
        break;
      }
    }
    await sleep(retryHttpMs);
  }

  return {
    data,
    ...(error && { error }),
  };
};
