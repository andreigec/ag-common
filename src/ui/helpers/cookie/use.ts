import type { SetStateAction } from 'react';
import { useState } from 'react';

import type { ReturnType, TParse } from './const';
import { getCookieRawWrapper } from './get';
import { setCookieRawWrapper } from './set';

export function useCookie<T>(p: {
  defaultValue: T;
  name: string;
  cookieDocument?: string;
  /**
   * required for objects. defaults to JSON.parse
   */
  parse?: TParse<T>;
  /**
   * required for objects. defaults to JSON.stringify
   */
  stringify?: (v: T) => string;
}): ReturnType<T> {
  const parse: TParse<T> = (s) => {
    if (!s) {
      return p.defaultValue;
    }

    if (p.parse) {
      return p.parse(s);
    }
    return JSON.parse(s);
  };

  const stringify = (s: T): string => {
    if (p.stringify) {
      return p.stringify(s);
    }
    return JSON.stringify(s);
  };

  const [cookie, setCookie] = useState<T>(
    getCookieRawWrapper({ ...p, parse }) ?? p.defaultValue,
  );

  const setState = (valueRaw: SetStateAction<T>) => {
    const value = (
      valueRaw instanceof Function ? valueRaw(cookie) : valueRaw
    ) as T;

    setCookieRawWrapper({ ...p, stringify, value });
    setCookie(value);
  };

  return [cookie, setState];
}

export const useCookieString = (p: {
  /**
   * default value. default ""
   */
  defaultValue?: string;
  name: string;
  cookieDocument?: string;
}) =>
  useCookie<string>({
    ...p,
    parse: (s) => s ?? '',
    stringify: (s) => s,
    defaultValue: p.defaultValue ?? '',
  });

export const useCookieNumber = (p: {
  /**
   * default value. default undefined
   */
  defaultValue?: number | undefined;
  name: string;
  cookieDocument?: string;
}) =>
  useCookie<number | undefined>({
    ...p,
    parse: (s) => (!s ? undefined : Number.parseFloat(s)),
    stringify: (s) => (!s ? '' : s.toString()),
    defaultValue: p.defaultValue,
  });

export const useCookieBoolean = (p: {
  defaultValue: boolean;
  name: string;
  cookieDocument?: string;
}) =>
  useCookie({
    ...p,
    parse: (s) => s === 'true',
    stringify: (s) => s.toString(),
  });
