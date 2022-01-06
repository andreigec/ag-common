import Axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { debug } from '../../common/helpers/log';
import { isJson } from '../../common/helpers/object';

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
  do {
    try {
      const setHeaders: { [a: string]: string } = {
        Accept: 'application/json',
        ...headers,
      };

      if (verb === 'get') {
        const ret = await Axios.get<TOut>(url, {
          headers: setHeaders,
          timeout,
          timeoutErrorMessage: `${url} timeout`,
        });

        return ret;
      }

      let noBody = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let axios: <T = any, R = AxiosResponse<T, any>, D = any>(
        url: string,
        body?: D | undefined,
        config?: AxiosRequestConfig<D> | undefined,
      ) => Promise<R> = Axios.post;

      if (verb === 'put') {
        axios = Axios.put;
      } else if (verb === 'post') {
        axios = Axios.post;
      } else if (verb === 'patch') {
        axios = Axios.patch;
      } else if (verb === 'delete') {
        axios = Axios.delete;
        noBody = true;
      }

      let ret: AxiosResponse<TOut> | undefined;

      if (noBody) {
        ret = await axios<TOut>(url, {
          headers: setHeaders,
          timeout,
          timeoutErrorMessage: `${url} timeout`,
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (body && isJson(body as any)) {
          setHeaders['Content-Type'] =
            setHeaders['Content-Type'] || 'application/json';
        }

        ret = await axios<TOut>(url, body, { headers: setHeaders });
      }

      return ret;
    } catch (e) {
      const em = e as AxiosError;

      // jwt expired or bad response
      // 403 returned for old token - will be refreshed
      if (em.code === '401' || em.code === '403') {
        debug('auth expired');
        onStaleAuth?.();
        retry = retryMax;
      }

      if (retry >= retryMax) {
        throw em;
      }
    }
    retry += 1;
  } while (retry <= retryMax);
  throw new Error('unexpected');
};
