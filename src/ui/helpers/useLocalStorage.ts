import { error, warn } from '../../common/helpers/log';
import { tryJsonParse } from '../../common/helpers/object';
import { useState } from 'react';
import { getTimeSeconds } from '../../common/helpers/date';

interface ILS {
  expiry?: number;
  val: string;
}

export const clearLocalStorageItem = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    warn('error clearing local storage:', e);
  }
};

export const clearAllLocalStorage = (except?: string[]) => {
  try {
    if (typeof window === 'undefined') {
      return;
    }

    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || except?.includes(key)) {
        return;
      }

      clearLocalStorageItem(key);
    }
  } catch (e) {
    warn('error clearing local storage:', e);
  }
};

export const setLocalStorageItem = <T>(key: string, value: T, ttl?: number) => {
  try {
    if (typeof window === 'undefined') {
      return;
    }

    const set: ILS = {
      expiry: !ttl ? undefined : getTimeSeconds() + ttl,
      val: JSON.stringify(value),
    };

    window.localStorage.setItem(key, JSON.stringify(set));
  } catch (e) {
    error(`set LS error:${key}-${e}`);
    clearLocalStorageItem(key);
  }
};

export const getLocalStorageItem = <T>(
  key: string,
  initialValue: T,
  ttl?: number,
): T => {
  if (typeof window === 'undefined') {
    return initialValue;
  }

  const itemraw = window.localStorage.getItem(key);
  const item = tryJsonParse<ILS | undefined>(itemraw, undefined);

  if (!item || (item.expiry && getTimeSeconds() > item.expiry)) {
    setLocalStorageItem(key, initialValue, ttl);
    return initialValue;
  }

  const itemv = tryJsonParse<T>(item.val, undefined);
  if (!itemv) {
    setLocalStorageItem(key, initialValue, ttl);
    return initialValue;
  }

  return itemv;
};

export function UseLocalStorage<T>(
  key: string,
  initialValue: T,
  ttl?: number,
): [T, (value: T | ((a: T) => T)) => void] {
  const storedValue = getLocalStorageItem(key, initialValue, ttl);
  //bump use of stored value
  const [, setT] = useState(0);
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((a: T) => T)) => {
    const valueToStore = (
      value instanceof Function ? value(storedValue) : value
    ) as T;

    setLocalStorageItem(key, valueToStore, ttl);
    setT(new Date().getTime());
  };

  return [storedValue, setValue];
}
