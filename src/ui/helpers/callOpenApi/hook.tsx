import { AxiosWrapper } from '../jwt';
import { ICallOpenApi } from './types';
import { useEffect, useState } from 'react';
import { CacheItems } from '../routes';
import { callOpenApiCached, callOpenApiCachedRaw } from './cached';

type AxiosWrapperWrap<T> = AxiosWrapper<T | undefined> & {
  loaded: boolean;
  loadcount: number;
};

/**
 * hooks+cached call to callOpenApi
 * @param p
 * @returns
 */
export const useCallOpenApi = <T, TDefaultApi>(
  p: ICallOpenApi<T, TDefaultApi> & {
    cacheKey: string;
    /**
     * will shortcut and return the appropriate axioswrapper data if cachekey is found
     */
    ssrCacheItems?: CacheItems;
    /**
     * default ttl in seconds for cache - default 120s
     */
    cacheTtl?: number;
  },
): AxiosWrapperWrap<T> => {
  const defv = {
    data: undefined,
    url: '',
    datetime: 0,
    loadcount: 0,
    loading: false,
    loaded: false,
    reFetch: async () => {},
  };

  const cachedData = callOpenApiCachedRaw({ ...p, onlyCached: true })?.data;
  const [data, setData] = useState<AxiosWrapperWrap<T>>({
    ...defv,
    ...(cachedData && { data: cachedData }),
    loaded: !!cachedData,
  });

  useEffect(() => {
    async function run() {
      const resp = await callOpenApiCached(p);
      setData((d) => ({
        ...resp,
        loaded: true,
        loading: false,
        loadcount: d.loadcount + 1,
        reFetch: async () => {},
        url: '',
        datetime: new Date().getTime(),
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
