import type { AxiosError } from 'axios';

import { retryHttpCodes, retryHttpMs } from '../../../common/const';
import { notEmpty } from '../../../common/helpers/array';
import { debug } from '../../../common/helpers/log';
import { sleep } from '../../../common/helpers/sleep';
import { getCookieString } from '../cookie';
import type { AxiosWrapperLite, User } from '../jwt';
import { getLocalStorageItem } from '../useLocalStorage';
import type { ICallOpenApi, OverrideAuth } from './types';

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
    idToken = overrideAuth.id_token;
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
      idToken = updated.jwt.id_token;
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
    baseOptions: Record<string, Record<string, string | number>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    middleware: { pre: (a: any) => any }[];
  } = {
    basePath: apiUrl,
    baseOptions: { headers: headers ?? {} },
    middleware: [],
  };

  //comes from either id_token cookie OR auth override param
  const idToken = await getIdTokenAuthHeader(p);

  if (headers?.authorization) {
    config.baseOptions.headers.authorization = headers.authorization.toString();
  } else if (headers?.authorization === undefined && idToken) {
    config.baseOptions.headers.authorization = `Bearer ${idToken}`;
  }

  if (config.baseOptions.headers.authorization) {
    config.middleware = [
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pre: (oldFetchParams: any) => {
          const url = oldFetchParams?.url ?? '(url)';
          const verb = oldFetchParams?.init?.method ?? '(verb)';

          debug(`callOpenApi: making ${verb} call to ${url}`);

          oldFetchParams.init.headers = {
            authorization: config.baseOptions.headers.authorization,
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
      const response = await func(cl);
      if (response.status < 400) {
        data = response.data;
        break;
      }

      throw { response };
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ae = e as AxiosError<unknown, any>;
      const status = Number(ae.code ?? ae.response?.status ?? 500);
      const errorMessage = [
        ae.status ?? '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ae.response?.data as any)?.toString() ?? '',
        ae.response?.statusText.toString() ?? '',
        ae.response?.status.toString() ?? '',
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        ae.message.toString() ?? '',
      ]
        .filter(notEmpty)
        .sort((a, b) => (a.length < b.length ? -1 : 1))
        .join('\n');

      //if auth fail, then quick exit
      if (status === 403 || status === 401) {
        logout();
        return {
          error: ae,
          data: undefined,
        };
      }

      //if not a potential retriable error, or have retried enough, then exit
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
