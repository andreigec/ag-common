import { warn } from '../../../common/helpers/log';
import { fromBase64 } from '../../../common/helpers/string';
import { TParse } from './const';
import { wipeCookies } from './set';

export function getCookieRaw({
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
  const c = ca.find((c2) => c2.startsWith(nameeq));
  if (c) {
    const raw = c.substr(nameeq.length, c.length);

    return raw;
  }

  return undefined;
}

/**
 * read chunks. json parse+unb64
 * parse defaults to JSON.parse. must change if want if type is not an object!
 * @param param0
 * @returns
 */
export function getCookieRawWrapper<T>({
  name,
  cookieDocument,
  defaultValue,
  parse: parseRaw,
}: {
  defaultValue: T;
  name: string;
  cookieDocument?: string;
  /**
   * required for objects. defaults to JSON.parse
   * parse defaults to JSON.parse. must change if want if type is not an object!
   */
  parse?: (s: string) => T;
}): T {
  const parse: TParse<T> = (s) => {
    if (!s) {
      return defaultValue;
    }

    if (parseRaw) {
      return parseRaw(s);
    }
    return JSON.parse(s);
  };

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

export const getCookieString = (p: {
  /**
   * default value. default ''
   */
  defaultValue?: string;
  name: string;
  cookieDocument?: string;
}) =>
  getCookieRawWrapper({
    ...p,
    parse: (s) => s,
    defaultValue: p.defaultValue || '',
  });
