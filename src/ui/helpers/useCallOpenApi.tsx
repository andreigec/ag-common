/* eslint-disable no-console */
import { AxiosWrapper } from './jwt';
import { ICallOpenApi } from './types';
import { useEffect, useState } from 'react';
import { callOpenApi } from './callOpenApi';
import { CacheItems } from './routes';

type AxiosWrapperWrap<T> = AxiosWrapper<T | undefined> & {
  loaded: boolean;
  loadcount: number;
};

export const useCallOpenApi = <T, TDefaultApi>(
  p: ICallOpenApi<T, TDefaultApi> & {
    cacheKey: string;
    /**
     * will shortcut and return the appropriate axioswrapper data if cachekey is found
     */
    ssrCacheItems?: CacheItems;
  },
): AxiosWrapperWrap<T> => {
  const ssrCached = p.ssrCacheItems?.find((s) => s.cacheKey === p.cacheKey);
  const defv = {
    data: undefined,
    url: '',
    datetime: 0,
    loadcount: 0,
    loading: false,
    loaded: false,
    reFetch: async () => {},
  };

  const [data, setData] = useState<AxiosWrapperWrap<T>>({
    ...defv,
    data: ssrCached ? ssrCached.prefillData?.data : undefined,
    loaded: !!ssrCached,
  });

  useEffect(() => {
    async function run() {
      const res = await callOpenApi(p);
      console.log('set res=', res);
      setData((d) => ({
        ...res,
        loaded: true,
        loading: false,
        loadcount: d.loadcount + 1,
      }));
    }

    const { error, loaded, loading, loadcount } = data;
    const ng = p.disabled || loaded || loading || (error && loadcount > 2);

    if (ng) {
      return;
    }

    setData((d) => ({ ...d, loading: true }));
    void run();
  }, [data, p, setData]);

  return {
    ...data,
    reFetch: async () => {
      setData(defv);
    },
  };
};
