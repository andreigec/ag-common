import { AxiosResponse } from 'axios';
import { arrayToObject } from '../../../common/helpers/array';
import { ApiResponse } from './types';

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
    .catch((e) => {
      const er = e as Response;
      const ret: AxiosResponse = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: undefined as any,
        status: er.status,
        statusText: er.statusText,
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
