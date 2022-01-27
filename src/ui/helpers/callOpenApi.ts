import { AxiosError } from 'axios';
import { getCookieWrapper } from './cookie';
import { sleep } from '../../common/helpers/sleep';
import { AxiosWrapper } from './jwt';
import { notEmpty } from '../../common/helpers/array';
import { ICallOpenApi } from './types';

export const callOpenApi = async <T, TDefaultApi>({
  func,
  apiUrl,
  overrideAuth,
  refreshToken,
  logout,
  newDefaultApi,
}: ICallOpenApi<T, TDefaultApi>): Promise<AxiosWrapper<T | undefined>> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let error: AxiosError<unknown, any> | undefined;
  let data: T | undefined;
  const config = {
    basePath: apiUrl,
    baseOptions: { headers: { authorization: '' } },
  };

  const isAuthed = !!getCookieWrapper<string>({ cname: 'id_token' });

  if (overrideAuth?.id_token) {
    config.baseOptions.headers.authorization = `Bearer ${overrideAuth?.id_token}`;
  } else if (isAuthed) {
    const updated = await refreshToken();
    if (updated?.jwt?.id_token) {
      config.baseOptions.headers.authorization = `Bearer ${updated?.jwt?.id_token}`;
    }
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

      throw new Error(JSON.stringify(resp.data) || resp.statusText);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ae = e as AxiosError<unknown, any>;
      const status = ae.response?.status;
      const errorMessage = [
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
          datetime: new Date().getTime(),
          loading: false,
          reFetch: async () => {},
          url: func.toString(),
        };
      }

      if (status !== 500 || errorCount === errorMax) {
        error = { ...ae, message: errorMessage };
        break;
      }
    }
    // eslint-disable-next-line no-await-in-loop
    await sleep(2000);
  }

  return {
    data,
    ...(error && { error }),
    loading: false,
    reFetch: async () => func(cl),
    url: func.toString(),
    datetime: new Date().getTime(),
  };
};
