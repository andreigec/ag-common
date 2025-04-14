import { warn } from '../../../common/helpers/log';
import { fromBase64 } from '../../../common/helpers/string/base64';
import type { TParse } from './const';
import { getCookie, wipeCookies } from './raw';
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
    if (s === undefined || s === null) {
      return defaultValue;
    }

    if (parseRaw) {
      return parseRaw(s);
    }
    return JSON.parse(s);
  };

  let raw = '';
  let currentCount = 0;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,no-constant-condition
  while (true) {
    const newv = getCookie({
      name: name + currentCount,
      cookieDocument,
    });

    if (newv === undefined) {
      break;
    }

    raw += newv;
    currentCount += 1;
  }

  try {
    if (!raw) {
      return defaultValue;
    }
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
