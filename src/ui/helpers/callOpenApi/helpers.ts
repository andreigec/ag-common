import type { AxiosResponse } from 'axios';

import { arrayToObject } from '../../../common/helpers/array';
import { getStringFromStream } from '../../../common/helpers/stream';
import type { ApiResponse } from './types';

/**
 * shim to convert raw response to an axios style response.
 * must convert all DefaultClass requests to the Raw equivalent
 * @param p
 * @returns
 */
export const apiResponseToAxiosResponse = async <T>(
  p: () => Promise<ApiResponse<T>>,
): Promise<AxiosResponse<T>> => {
  try {
    const r = await p();
    const r1: AxiosResponse = {
      status: r.raw.status,
      statusText: r.raw.statusText,
      data: await r.value(),
      headers: arrayToObject(
        Object.entries(r.raw.headers),
        (s) => s[0],
        (s) => s[1],
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config: {} as any,
    };

    return r1;
  } catch (e) {
    const er = e as Response;

    //try and get body
    let statusText = er.statusText || (e as Error)?.stack || '';

    if (er.body) {
      try {
        const st = await getStringFromStream(er.body);
        statusText = st;
      } catch (e) {
        //
      }
    }

    const ret: AxiosResponse = {
      data: undefined,
      status: er.status,
      statusText,
      headers:
        er.headers &&
        arrayToObject(
          Object.entries(er.headers),
          (s) => s[0],
          (s) => s[1],
        ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      config: {} as any,
    };

    return ret;
  }
};
