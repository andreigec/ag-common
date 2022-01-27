/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useState } from 'react';
import { warn } from '../../common/helpers/log';

const expireDate = 'Thu, 01 Jan 1970 00:00:00 UTC';
const maxCookieLen = 4000;
const chunkString = (str: string, length: number) =>
  str.match(new RegExp(`.{1,${length}}`, 'g')) as string[];

export const toBase64 = (str: string) => Buffer.from(str).toString('base64');
export const fromBase64 = (str: string) =>
  Buffer.from(decodeURIComponent(str), 'base64').toString();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(process as any).nodeLocalCookie === undefined) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (process as any).nodeLocalCookie = '';
}

export const setNodeCookieDocument = (s: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (process as any).nodeLocalCookie = s;
};

function setCookie(cname: string, raw: string | null | undefined, exdays = 1) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${
    !raw || exdays < 0 ? expireDate : d.toUTCString()
  }`;

  if (typeof window === undefined) {
    warn('cant set cookie with no window object');
    return;
  }

  document.cookie = `${cname}=${!raw ? '' : raw};${expires};path=/`;
}

function getCookie({ cname }: { cname: string }) {
  const name = `${cname}=`;
  const ca1 =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((process as any).nodeLocalCookie as string) ||
    (typeof window !== 'undefined' && document.cookie);

  if (!ca1 || !ca1?.trim()) {
    return undefined;
  }

  const ca = ca1.split(';').map((t) => t.trim());

  for (const c of ca) {
    if (c.indexOf(name) === 0) {
      return c.substr(name.length, c.length);
    }
  }
  return undefined;
}

export function setCookieWrapper<T>(cname: string, raw: T, exdays = 1) {
  let index = 0;
  while (getCookie({ cname: cname + index })) {
    setCookie(cname + index, null, -1);
    index += 1;
  }

  if (!raw) {
    return;
  }

  const str = toBase64(JSON.stringify(raw));
  let chunks = [str];

  if (str.length > maxCookieLen) {
    chunks = chunkString(str, maxCookieLen);
  }

  for (const index1 in chunks) {
    const chunk = chunks[index1];
    setCookie(cname + index1, chunk, exdays);
  }
}

export function wipeCookies(cname: string) {
  let currentCount = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (getCookie({ cname: cname + currentCount })) {
      setCookie(cname + currentCount, undefined);
      currentCount += 1;
    } else {
      return;
    }
  }
}

export function getCookieWrapper<T>({
  cname,
  defaultValue,
}: {
  cname: string;
  defaultValue?: string;
}): T {
  let raw = '';
  let currentCount = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const newv = getCookie({
      cname: cname + currentCount,
    });

    if (!newv) {
      if (currentCount === 0) {
        if (defaultValue) {
          setCookie(cname, defaultValue);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return defaultValue as any;
        }
        return undefined as unknown as T;
      }

      try {
        return JSON.parse(fromBase64(raw)) as T;
      } catch (e) {
        wipeCookies(cname);
        return undefined as unknown as T;
      }
    }

    raw += newv;
    currentCount += 1;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCookie<T>({
  key,
  defaultValue,
}: {
  key: string;
  defaultValue?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): [T, (v: T) => any] {
  const [cookie, setC] = useState<T>(
    getCookieWrapper({ cname: key, defaultValue }),
  );

  return [
    cookie,
    (v: T) => {
      setCookieWrapper(key, v, 2);
      setC(v);
    },
  ];
}
