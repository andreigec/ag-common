/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useState } from 'react';
import { warn } from '../../common/helpers/log';
import { chunkString, fromBase64, toBase64 } from '../../common/helpers/string';

const expireDate = 'Thu, 01 Jan 1970 00:00:00 UTC';
const maxCookieLen = 4000;
/**
 * expiryDays <0 will delete
 * @param param0
 * @returns
 */
function setCookieRaw({
  name,
  value,
  expiryDays = 1,
}: {
  name: string;
  value: string;
  /**
   * defaults to 1
   */
  expiryDays?: number;
}) {
  if (typeof window === undefined) {
    return;
  }

  const d = new Date();
  d.setTime(d.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${
    !value || expiryDays < 0 ? expireDate : d.toUTCString()
  }`;

  document.cookie = `${name}=${!value ? '' : value};${expires};path=/`;
}

function getCookieRaw({
  name,
  cookieDocument,
}: {
  name: string;
  cookieDocument?: string;
}) {
  const nameeq = `${name}=`;
  const ca1 =
    cookieDocument || (typeof window !== 'undefined' && document.cookie);

  if (!ca1 || !ca1?.trim()) {
    return undefined;
  }

  const ca = ca1.split(';').map((t) => t.trim());

  for (const c of ca) {
    if (c.indexOf(nameeq) === 0) {
      const raw = c.substr(nameeq.length, c.length);

      return raw;
    }
  }
  return undefined;
}

export function wipeCookies(name: string) {
  if (typeof window === 'undefined') {
    warn('cant wipe cookies on server');
    return;
  }

  let currentCount = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (
      getCookieRaw({
        name: name + currentCount,
        cookieDocument: '',
      })
    ) {
      setCookieRaw({ name: name + currentCount, value: '', expiryDays: -1 });
      currentCount += 1;
    } else {
      return;
    }
  }
}

/**
 * json+b64 incoming. chunk. write chunks
 * @param p
 * @returns
 */
export function setCookieWrapper<T>(p: {
  value: T;
  name: string;
  cookieDocument?: string;
  stringify: (s: T) => string;
}) {
  wipeCookies(p.name);

  if (!p.value) {
    return;
  }

  const str = toBase64(p.stringify(p.value));
  const chunks = chunkString(str, maxCookieLen);

  for (const index1 in chunks) {
    const chunk = chunks[index1];
    setCookieRaw({ ...p, name: p.name + index1, value: chunk });
  }
}

/**
 * read chunks. json parse+unb64
 * @param param0
 * @returns
 */
export function getCookieWrapper<T>({
  name,
  cookieDocument,
  defaultValue,
  parse,
}: {
  defaultValue: T;
  name: string;
  cookieDocument?: string;
  parse: (s: string) => T;
}): T {
  let raw = '';
  let currentCount = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const newv = getCookieRaw({
      name: name + currentCount,
      cookieDocument,
    });

    if (!newv) {
      break;
    }

    raw += newv;
    currentCount += 1;
  }

  try {
    return parse(fromBase64(raw));
  } catch (e) {
    warn('cookie error:', e);
    wipeCookies(name);
    return defaultValue;
  }
}
type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);
type ReturnType<T> = [T, Dispatch<SetStateAction<T>>];
type TParse<T> = (s: string | null | undefined) => T;
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
    getCookieWrapper({ ...p, parse }) || p.defaultValue,
  );

  const setState = (valueRaw: SetStateAction<T>) => {
    const value = (
      valueRaw instanceof Function ? valueRaw(cookie) : valueRaw
    ) as T;

    setCookieWrapper({ ...p, stringify, value });
    setCookie(value);
  };

  return [cookie, setState];
}

export const useCookieString = (p: {
  defaultValue: string;
  name: string;
  cookieDocument?: string;
}) => useCookie({ ...p, parse: (s) => s || '', stringify: (s) => s });

export const useCookieNumber = (p: {
  defaultValue: number | undefined;
  name: string;
  cookieDocument?: string;
}) =>
  useCookie({
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
