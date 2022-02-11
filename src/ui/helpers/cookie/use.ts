import { SetStateAction, useState } from 'react';
import { TParse, ReturnType } from './const';
import { getCookieRawWrapper } from './get';
import { setCookieRawWrapper } from './set';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    getCookieRawWrapper({ ...p, parse }) || p.defaultValue,
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
  defaultValue: string;
  name: string;
  cookieDocument?: string;
}) => useCookie<string>({ ...p, parse: (s) => s || '', stringify: (s) => s });

export const useCookieNumber = (p: {
  defaultValue: number | undefined;
  name: string;
  cookieDocument?: string;
}) =>
  useCookie<number | undefined>({
    ...p,
    parse: (s) => (!s ? undefined : Number.parseFloat(s)),
    stringify: (s) => (!s ? '' : s.toString()),
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
