import { AxiosWrapper } from '../jwt';
import { ICallOpenApi } from './types';
import { useEffect, useState } from 'react';
import { CacheItems } from '../routes';
import { callOpenApiCachedRaw } from './cached';
import { callOpenApi } from './direct';

export type TUseCallOpenApiDispatch<A> = (value: A) => A;

export type TUseCallOpenApi<T> = AxiosWrapper<T> & {
  loaded: boolean;
  loadcount: number;
  setData: (d: TUseCallOpenApiDispatch<T | undefined>) => void;
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
): TUseCallOpenApi<T> => {
  const defv: TUseCallOpenApi<T> = {
    data: undefined,
    url: '',
    datetime: 0,
    loadcount: 0,
    loading: false,
    loaded: false,
    reFetch: async () => {},
    setData: () => {},
  };

  const cachedData = callOpenApiCachedRaw({ ...p, onlyCached: true })?.data;
  const [data, setData] = useState<TUseCallOpenApi<T>>({
    ...defv,
    ...(cachedData && { data: cachedData }),
    loaded: !!cachedData,
  });

  useEffect(() => {
    async function run() {
      const resp = await callOpenApi(p);
      setData((d) => ({
        ...resp,
        loaded: true,
        loading: false,
        loadcount: d.loadcount + 1,
        reFetch: async () => {},
        url: '',
        datetime: new Date().getTime(),
        setData: () => {},
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
    setData: (d) => {
      setData({ ...data, data: d(data.data), datetime: new Date().getTime() });
    },
  };
};
