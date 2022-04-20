import { ICallOpenApi } from './types';
import { callOpenApiCachedRaw } from './cached';
import { callOpenApi } from './direct';
import { CacheItems } from '../routes';
import { AxiosWrapper } from '../jwt';
import { useEffect, useState } from 'react';

export type TUseCallOpenApiDispatch<A> = (value: A) => A;

export type TUseCallOpenApi<T> = AxiosWrapper<T> & {
  loaded: boolean;
  loadcount: number;
  setData: (d: TUseCallOpenApiDispatch<T | undefined>) => void;
};

type TUseCallOpenApi1<T, TDefaultApi> = ICallOpenApi<T, TDefaultApi> & {
  cacheKey: string;
  /**
   * will shortcut and return the appropriate axioswrapper data if cachekey is found
   */
  ssrCacheItems?: CacheItems;
  /**
   * default ttl in seconds for cache - default 120s
   */
  cacheTtl?: number;
};

const defaultState = <T, TDefaultApi>(p: TUseCallOpenApi1<T, TDefaultApi>) => {
  const cachedData = callOpenApiCachedRaw({ ...p, onlyCached: true })?.data;

  return {
    data: undefined,
    url: '',
    datetime: 0,
    loadcount: 0,
    loading: false,
    reFetch: async () => {},
    setData: () => {},
    ...(cachedData && { data: cachedData }),
    loaded: !!cachedData,
  };
};

/**
 * hooks+cached call to callOpenApi
 * @param p
 * @returns
 */
export const useCallOpenApi = <T, TDefaultApi>(
  pIn: TUseCallOpenApi1<T, TDefaultApi>,
): TUseCallOpenApi<T> => {
  const [p, setP] = useState<TUseCallOpenApi1<T, TDefaultApi>>(pIn);
  const [data, setData] = useState<TUseCallOpenApi<T>>(defaultState(p));
  useEffect(() => {
    if (JSON.stringify(p) !== JSON.stringify(pIn)) {
      setP(pIn);
      setData(defaultState(pIn));
    }
  }, [p, pIn]);

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
    reFetch: async () => setData(defaultState(p)),
    setData: (d) => {
      setData({ ...data, data: d(data.data), datetime: new Date().getTime() });
    },
  };
};
