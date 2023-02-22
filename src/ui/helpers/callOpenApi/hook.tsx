import { useCallback, useEffect, useState } from 'react';

import { AxiosWrapper } from '../jwt';
import { CacheItems } from '../routes';
import { callOpenApiCachedRaw } from './cached';
import { callOpenApi } from './direct';
import { ICallOpenApi } from './types';

export type TUseCallOpenApiDispatch<A> = (value: A) => A;

export type TUseCallOpenApi<T> = AxiosWrapper<T> & {
  loaded: boolean;
  loadcount: number;
  setData: (d: TUseCallOpenApiDispatch<T | undefined>) => void;
};

type TUseCallOpenApiInt<T, TDefaultApi> = ICallOpenApi<T, TDefaultApi> & {
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

const defaultState = <T, TDefaultApi>(
  p: TUseCallOpenApiInt<T, TDefaultApi>,
  /**
   * default false
   */
  noSsr = false,
): Omit<TUseCallOpenApi<T>, 'reFetch' | 'setData'> => {
  const cachedData = noSsr
    ? undefined
    : callOpenApiCachedRaw({ ...p, onlyCached: true })?.data;

  return {
    data: undefined,
    url: '',
    datetime: 0,
    loadcount: 0,
    loading: false,
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
  pIn: TUseCallOpenApiInt<T, TDefaultApi>,
): TUseCallOpenApi<T> => {
  const [data, setData] = useState<
    [
      TUseCallOpenApiInt<T, TDefaultApi>,
      Omit<TUseCallOpenApi<T>, 'reFetch' | 'setData'>,
    ]
  >([pIn, defaultState(pIn)]);

  useEffect(() => {
    if (JSON.stringify(data[0]) !== JSON.stringify(pIn)) {
      setData([pIn, defaultState(pIn, true)]);
    }
  }, [data, pIn]);

  const run = useCallback(async () => {
    const resp = await callOpenApi(data[0]);
    setData((d) => [
      d[0],
      {
        ...resp,
        loaded: true,
        loading: false,
        loadcount: d[1].loadcount + 1,
        url: '',
        datetime: new Date().getTime(),
      },
    ]);
  }, [data]);

  useEffect(() => {
    const { error, loaded, loading, loadcount } = data[1];
    const ng =
      data[0].disabled || loaded || loading || (error && loadcount > 2);

    if (ng) {
      return;
    }

    setData((d) => [d[0], { ...d[1], loading: true }]);
    void run();
  }, [data, run, setData]);

  const ret: TUseCallOpenApi<T> = {
    ...data[1],
    reFetch: async () => run,
    setData: (d) => {
      setData([
        data[0],
        { ...data[1], data: d(data[1].data), datetime: new Date().getTime() },
      ]);
    },
  };

  return ret;
};
