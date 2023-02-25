import { useCallback, useEffect, useState } from 'react';

import { AxiosWrapper } from '../jwt';
import { CacheItems } from '../routes';
import { useGranularEffect } from '../useGranularHook';
import { callOpenApiCachedRaw, setOpenApiCacheRaw } from './cached';
import { callOpenApi } from './direct';
import { ICallOpenApi } from './types';

export type TUseCallOpenApi<T> = AxiosWrapper<T> & {
  loaded: boolean;
  loadcount: number;
  /** internally mutate state, but do not refetch. will automatically bump datetime */
  setData: React.Dispatch<
    React.SetStateAction<Omit<TUseCallOpenApi<T>, 'reFetch' | 'setData'>>
  >;
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
  inConfig: TUseCallOpenApiInt<T, TDefaultApi>,
): TUseCallOpenApi<T> => {
  /** response from hook */
  const [resp, setResp] = useState<
    Omit<TUseCallOpenApi<T>, 'reFetch' | 'setData'>
  >(defaultState(inConfig));
  /** config about hook*/
  const [config, setConfig] =
    useState<TUseCallOpenApiInt<T, TDefaultApi>>(inConfig);

  useGranularEffect(
    () => {
      if (JSON.stringify(config) !== JSON.stringify(inConfig)) {
        setConfig(inConfig);
        setResp(defaultState(inConfig, true));
      }
    },
    [inConfig],
    [resp, setResp, config, setConfig],
  );

  const reFetch = useCallback(async () => {
    const newdate = new Date().getTime();

    const newresp = await callOpenApi(config);
    setResp((d) => {
      let newState: typeof d = {
        ...d,
        loaded: true,
        loading: false,
      };
      if (newdate > d.datetime) {
        newState = {
          ...newresp,
          loaded: true,
          loading: false,
          loadcount: d.loadcount + 1,
          datetime: newdate,
        };
      }
      if (JSON.stringify(d) !== JSON.stringify(newState)) {
        return newState;
      } else {
        return d;
      }
    });
  }, [config]);

  useEffect(() => {
    const { error, loaded, loading, loadcount } = resp;
    const ng = config.disabled || loaded || loading || (error && loadcount > 2);

    if (ng) {
      return;
    }

    setResp((d) => ({ ...d, loading: true }));
    void reFetch();
  }, [config.disabled, reFetch, resp]);

  return {
    ...resp,
    reFetch,
    setData: async (p) => {
      //wipe cache, or might revert
      await setOpenApiCacheRaw(config, undefined);
      setResp(p);
      //ensure datetime is changed, or might get overwritten
      setResp((x) => ({ ...x, datetime: new Date().getTime() }));
    },
  };
};
