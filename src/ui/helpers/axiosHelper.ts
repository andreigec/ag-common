import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { retryHttpCodes, retryHttpMs } from '../../common/const';
import { debug } from '../../common/helpers/log';
import { isJson } from '../../common/helpers/object';
import { sleep } from '../../common/helpers/sleep';

/**
 *
 * @param body accepts object or json, and passes as-is
 * @returns
 */
export const axiosHelper = async <TOut>({
  verb,
  url,
  body,
  headers,
  timeout = 30000,
  retryMax = 0,
  onStaleAuth,
}: {
  headers?: { [a: string]: string };
  verb: 'put' | 'post' | 'get' | 'patch' | 'delete';
  url: string;
  body?: unknown;
  timeout?: number;
  retryMax?: number;
  onStaleAuth?: () => void;
}): Promise<AxiosResponse<TOut>> => {
  let retry = 0;
  let ret: AxiosResponse<TOut> | undefined;
  do {
    try {
      const setHeaders: { [a: string]: string } = {
        Accept: 'application/json',
        ...headers,
      };

      if (verb === 'get') {
        ret = await axios.get<TOut>(url, {
          headers: setHeaders,
          timeout,
          timeoutErrorMessage: `${url} timeout`,
        });

        return ret;
      }

      let noBody = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let axiosV: <T = any, R = AxiosResponse<T, any>, D = any>(
        url: string,
        body?: D | undefined,
        config?: AxiosRequestConfig<D> | undefined,
      ) => Promise<R> = axios.post;

      if (verb === 'put') {
        axiosV = axios.put;
      } else if (verb === 'post') {
        axiosV = axios.post;
      } else if (verb === 'patch') {
        axiosV = axios.patch;
      } else if (verb === 'delete') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        axiosV = axios.delete as any;
        noBody = true;
      }

      if (noBody) {
        ret = await axiosV<TOut>(url, {
          headers: setHeaders,
          timeout,
          timeoutErrorMessage: `${url} timeout`,
        });
      } else {
        if (body && isJson(body)) {
          setHeaders['Content-Type'] =
            setHeaders['Content-Type'] || 'application/json';
        }

        ret = await axiosV<TOut>(url, body, { headers: setHeaders });
      }

      return ret;
    } catch (e) {
      const em = e as AxiosError;
      const c = Number(em.code ?? '500');

      // jwt expired or bad response
      // 403 returned for old token - will be refreshed
      if (c === 401 || c === 403) {
        debug('auth expired');
        onStaleAuth?.();
        retry = retryMax;
      }

      if (!retryHttpCodes.includes(c) || retry >= retryMax) {
        throw em;
      }
    }
    retry += 1;
    await sleep(retryHttpMs);
  } while (retry <= retryMax);
  throw new Error('unexpected');
};
