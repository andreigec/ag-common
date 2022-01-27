import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Mutex } from './mutex';
import { MutexData } from './mutexData';
import { callOpenApi } from './callOpenApi';
import { CacheItems } from './routes';
import { error, info } from '../../common/helpers/log';
import { AxiosWrapper, User } from './jwt';
import { OverrideAuth } from './types';
const mutex = new Mutex({
  autoUnlockTimeoutMs: 10000,
  intervalMs: 100,
  Promise: Promise,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mutexData = new MutexData<AxiosWrapper<any>>();
export const deleteMutexData = (key: string) => mutexData.delete(key);
export const setMutexData = ({
  key,
  data,
  ttlSeconds = 3600,
}: {
  key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  ttlSeconds: number;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrap: AxiosWrapper<any> = {
    data,
    loading: false,
    reFetch: async () => {
      info('mocked');
    },
    datetime: new Date().getTime(),
    error: undefined,
    url: '',
  };

  mutexData.setData({ key, data: wrap, ttlSeconds });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getMutexData = <T,>(key: string) =>
  mutexData.getData(key) as AxiosWrapper<T>;

async function mLock<T, TDefaultApi>(p: {
  key: string;
  func: (f: TDefaultApi) => Promise<AxiosResponse<T>>;
  ttlSeconds?: number;
  logout: () => void;
  refreshToken: () => Promise<User | undefined>;
  apiUrl: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newDefaultApi: (config: any) => TDefaultApi;
  overrideAuth?: OverrideAuth;
}) {
  let unlock: () => void | undefined;
  try {
    unlock = await mutex.capture(p.key);
    if (mutexData.getData(p.key)) {
      return;
    }

    const newData = await callOpenApi(p);

    if (!newData) {
      return;
    }

    if (newData.error) {
      error('api error:', newData.error);
    } else {
      mutexData.setData({
        key: p.key,
        data: newData,
        ttlSeconds: p.ttlSeconds,
      });
    }

    mutexData.pingSubscribers(p.key);
  } catch (e) {
    error('mutex error:', e);
  } finally {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (unlock) {
      unlock();
    }
  }
}

const getTs = () => new Date().getTime();
/**
 *
 * @param overrideAuth - auth automatically picked up from id_token cookie, can override value here, but not required
 * @returns
 */
export const useOpenApiStore = <T, TDefaultApi>(p: {
  ttlSeconds?: number;
  func: (f: TDefaultApi) => Promise<AxiosResponse<T>>;
  cacheKey: string;
  logout: () => void;
  refreshToken: () => Promise<User | undefined>;
  disabled?: boolean;
  apiUrl: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newDefaultApi: (config: any) => TDefaultApi;
  overrideAuth?: OverrideAuth;
  /**
   * will shortcut and return the appropriate axioswrapper data if cachekey is found
   */
  ssrCacheItems?: CacheItems;
}): AxiosWrapper<T> => {
  const { cacheKey, disabled } = p;
  if (!cacheKey) {
    throw new Error('no cache key');
  }

  const [key, setKey] = useState(cacheKey);
  useEffect(() => {
    setKey(cacheKey);
  }, [cacheKey]);

  const [, setTs] = useState<number>(0);
  useEffect(() => {
    const myHash = getTs().toString();
    mutexData.subscribe(key, myHash, setTs);
    return () => mutexData.unsubscribe(key, myHash);
  }, [key]);

  useEffect(() => {
    if (!disabled && !mutexData.getData(key)) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      mLock({
        key,
        ...p,
      });
    }
  }, [disabled, key, p]);

  if (disabled) {
    return {
      loading: false,
      error: undefined,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: undefined as any,
      datetime: new Date().getTime(),
      reFetch: async () => {},
      url: '',
    };
  }

  const ssrCached = p.ssrCacheItems?.find((s) => s.cacheKey === cacheKey);
  if (typeof window === 'undefined' && ssrCached) {
    return ssrCached.prefillData;
  }

  const current = mutexData.getData(key);

  if (!current) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { loading: true } as any;
  }

  return {
    ...current,
    reFetch: async () => {
      mutexData.setData({
        key,
        data: { ...current, loading: true },
        ttlSeconds: p.ttlSeconds,
      });

      mutexData.pingSubscribers(key);
      const newData = await callOpenApi(p);
      mutexData.setData({ key, data: newData, ttlSeconds: p.ttlSeconds });
      mutexData.pingSubscribers(key);
    },
  };
};

export const setOpenApiCache = (items: CacheItems) => {
  items.forEach(({ cacheKey, prefillData, ttlSeconds }) => {
    mutexData.setData({ key: cacheKey, data: prefillData, ttlSeconds });
  });
};
