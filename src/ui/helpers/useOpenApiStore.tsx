import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Mutex } from './mutex';
import { MutexData } from './mutexData';
import { callOpenApi, OverrideAuth } from './callOpenApi';
import { CacheItems } from './routes';
import { error, info } from '../../common/helpers/log';
import { AxiosWrapper, User } from './jwt';
const mutex = new Mutex({
  autoUnlockTimeoutMs: 10000,
  intervalMs: 100,
  Promise: Promise,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mutexData = new MutexData<AxiosWrapper<any>>();
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

async function mLock<T, TDefaultApi>({
  key,
  func,
  ttlSeconds = 3600,
  logout,
  refreshToken,
  apiUrl,
  newDefaultApi,
  overrideAuth,
}: {
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
    unlock = await mutex.capture(key);
    if (mutexData.getData(key)) {
      return;
    }

    const newData = await callOpenApi({
      apiUrl,
      func,
      logout,
      refreshToken,
      newDefaultApi,
      overrideAuth,
    });

    if (!newData) {
      return;
    }

    if (newData.error) {
      error('api error:', newData.error);
    } else {
      mutexData.setData({ key, data: newData, ttlSeconds });
    }

    mutexData.pingSubscribers(key);
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

  if (!mutexData.getData(key)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return { loading: true } as any;
  }

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

  const current = mutexData.getData(key);

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
