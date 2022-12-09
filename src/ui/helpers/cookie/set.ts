import { warn } from '../../../common/helpers/log';
import { chunkString, toBase64 } from '../../../common/helpers/string';
import { expireDate, maxCookieLen } from './const';
import { getCookieRaw } from './get';

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

  document.cookie = `${name}=${
    !value ? '' : value
  };${expires};path=/; SameSite=Strict; Secure`;
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
export function setCookieRawWrapper<T>(p: {
  value: T;
  name: string;
  cookieDocument?: string;
  /**
   * required for objects. defaults to JSON.stringify
   */
  stringify?: (s: T) => string;
}) {
  const stringify = (s: T): string => {
    if (p.stringify) {
      return p.stringify(s);
    }
    return JSON.stringify(s);
  };

  wipeCookies(p.name);

  if (!p.value) {
    return;
  }

  const str = toBase64(stringify(p.value));
  const chunks = chunkString(str, maxCookieLen);

  for (const index1 in chunks) {
    const chunk = chunks[index1];
    setCookieRaw({ ...p, name: p.name + index1, value: chunk });
  }
}

export const setCookieString = (p: {
  value: string;
  name: string;
  cookieDocument?: string;
}) => setCookieRawWrapper({ ...p, stringify: (s) => s });
