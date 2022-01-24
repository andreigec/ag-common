import { AxiosWrapper } from './jwt';
import { ICallOpenApi } from './types';
import { useEffect, useState } from 'react';
import { callOpenApi } from './callOpenApi';

type AxiosWrapperWrap<T> = AxiosWrapper<T | undefined> & {
  loaded: boolean;
  loadcount: number;
};
const defaultV = <T,>(def: T): AxiosWrapperWrap<T> => ({
  loading: false,
  data: def,
  datetime: new Date().getTime(),
  reFetch: async () => {},
  error: undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  url: undefined as any,
  //
  loaded: false,
  loadcount: 0,
});

export const useCallOpenApi = <T, TDefaultApi>(
  p: ICallOpenApi<T, TDefaultApi> & { cacheKey: string },
): AxiosWrapperWrap<T> => {
  const [data, setData] = useState<AxiosWrapperWrap<T>>(defaultV(undefined));
  useEffect(() => {
    async function run() {
      const res = await callOpenApi(p);
      setData((d) => ({
        ...res,
        loaded: true,
        loading: false,
        loadcount: d.loadcount + 1,
      }));
    }

    const { error, loaded, loading, loadcount } = data;
    if (loaded || loading || (error && loadcount < 2)) {
      return;
    }

    setData((d) => ({ ...d, loading: true }));
    void run();
  }, [data, p, setData]);

  return {
    ...data,
    reFetch: async () => {
      setData(defaultV(undefined));
    },
  };
};
