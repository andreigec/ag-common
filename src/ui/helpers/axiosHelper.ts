import Axios, { AxiosResponse, AxiosError } from 'axios';
import { isJson } from '../../common/helpers/object';

export const axiosHelper = async <TOut>({
  verb,
  url,
  data,
  headers,
  timeout = 30000,
  retryMax = 0,
}: {
  headers?: { [a: string]: string };
  verb: 'put' | 'post' | 'get' | 'patch' | 'delete';
  url: string;
  data?: unknown;
  timeout?: number;
  retryMax?: number;
}): Promise<AxiosResponse<TOut>> => {
  let retry = 0;
  do {
    try {
      const setHeaders: { [a: string]: string } = {
        accept: 'application/json',
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
      let func = Axios.post;
      if (verb === 'put') {
        func = Axios.put;
      } else if (verb === 'post') {
        func = Axios.post;
      } else if (verb === 'patch') {
        func = Axios.patch;
      } else if (verb === 'delete') {
        func = Axios.delete;
        noBody = true;
      }

      let ret: AxiosResponse<TOut> | undefined;

      if (noBody) {
        ret = await func<TOut>(url, {
          headers: setHeaders,
          timeout,
          timeoutErrorMessage: `${url} timeout`,
        });
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (data && isJson(data as any)) {
          setHeaders['Content-Type'] = 'application/json';
        }

        ret = await func<TOut>(url, data, { headers: setHeaders });
      }

      return ret;
    } catch (e) {
      const em = e as AxiosError;

      // jwt expired or bad response
      // 403 returned for old token - will be refreshed
      if (em.code === '401' || em.code === '403') {
        // eslint-disable-next-line no-console
        console.log('auth expired, reset');
        // retry current page
        window.location.reload();
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
