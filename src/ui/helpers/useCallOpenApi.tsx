import { AxiosWrapper } from './jwt';
import { ICallOpenApi } from './types';
import { useEffect, useState } from 'react';
import { callOpenApi } from './callOpenApi';
import { CacheItems } from './routes';
import NodeCache from 'node-cache';

type AxiosWrapperWrap<T> = AxiosWrapper<T | undefined> & {
  loaded: boolean;
  loadcount: number;
};

let useCallOpenApiCache: NodeCache | undefined;

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
  if (!useCallOpenApiCache) {
    useCallOpenApiCache = new NodeCache({ stdTTL: p.cacheTtl || 120 });
  }

  const ssrCached = p.ssrCacheItems?.find((s) => s.cacheKey === p.cacheKey);
  if (!useCallOpenApiCache.get<T>(p.cacheKey) && ssrCached) {
    useCallOpenApiCache.set(p.cacheKey, ssrCached);
  }

  const defv = {
    data: undefined,
    url: '',
    datetime: 0,
    loadcount: 0,
    loading: false,
    loaded: false,
    reFetch: async () => {},
  };

  const cached = useCallOpenApiCache.get<T>(p.cacheKey);
  const [data, setData] = useState<AxiosWrapperWrap<T>>({
    ...defv,
    data: cached,
    loaded: !!cached,
  });

  useEffect(() => {
    async function run() {
      const resp = await callOpenApi(p);
      if (useCallOpenApiCache) {
        useCallOpenApiCache.set<T>(p.cacheKey, resp.data);
      }

      setData((d) => ({
        ...(resp as AxiosWrapper<T>),
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
  }, [cached, data, p, setData]);

  return {
    ...data,
    reFetch: async () => {
      setData(defv);
    },
  };
};
