import { AxiosResponse } from 'axios';

import { arrayToObject } from '../../../common/helpers/array';
import { ApiResponse } from './types';

async function getStringFromStream(
  stream: ReadableStream<Uint8Array>,
): Promise<string> {
  const decoder = new TextDecoder();

  const reader = stream.getReader();
  let result = '';

  try {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      // Convert the Uint8Array chunk to a string
      const chunkString = decoder.decode(value);

      // Append the chunk to the final result
      result += chunkString;
    }
  } finally {
    reader.releaseLock();
  }

  return result;
}
/**
 * shim to convert raw response to an axios style response.
 * must convert all DefaultClass requests to the Raw equivalent
 * @param p
 * @returns
 */
export const apiResponseToAxiosResponse = async <T>(
  p: () => Promise<ApiResponse<T>>,
): Promise<AxiosResponse<T>> =>
  p()
    .then(async (r) => {
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
    })
    .catch(async (e) => {
      const er = e as Response;

      //try and get body
      let statusText = er.statusText;

      if (er.body) {
        try {
          statusText = await getStringFromStream(er.body);
        } catch (e) {
          //
        }
      }

      const ret: AxiosResponse = {
        data: undefined,
        status: er.status,
        statusText,
        headers: arrayToObject(
          Object.entries(er.headers),
          (s) => s[0],
          (s) => s[1],
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config: {} as any,
      };

      return ret;
    });
