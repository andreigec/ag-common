import { warn } from '../../../common/helpers/log';
import { expireDate } from './const';

/**
 * parse cookie string into key values
 * @param cookieString
 * @returns
 */
export const getAllCookies = (cookieString?: string) => {
  const cookieKeyValuePairs: Partial<Record<string, string>> = {};
  if (!cookieString) {
    return cookieKeyValuePairs;
  }

  const cookieArr = cookieString.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    const cookieKeyValue = cookieArr[i].split('=');
    cookieKeyValuePairs[cookieKeyValue[0].trim()] = cookieKeyValue[1]?.trim();
  }
  return cookieKeyValuePairs;
};

/** get a cookie by name*/
export const getCookie = ({
  name,
  cookieDocument,
}: {
  name: string;
  cookieDocument?: string;
}) => getAllCookies(cookieDocument)[name];

/**
 * Sets a cookie with the specified name and value
 * @param param0
 * @returns
 */
export function setCookie({
  name,
  value,
  expiryDays = 1,
}: {
  name: string;
  value: string;
  /**
   * Number of days until the cookie expires
   * - Default: 1 day
   * - Use 0 to set a session cookie (expires when browser closes)
   * - Use a very large number (e.g. 36500 for ~100 years) to effectively disable expiration
   * - Use negative number to delete the cookie
   */
  expiryDays?: number;
}) {
  if (typeof window === 'undefined') {
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

/** delete all non httponly cookies */
export function wipeCookies(name: string) {
  if (typeof window === 'undefined') {
    warn('cant wipe cookies on server');
    return;
  }

  let currentCount = 0;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  while (true) {
    if (
      getCookie({
        name: name + currentCount,
        cookieDocument: document.cookie,
      })
    ) {
      setCookie({ name: name + currentCount, value: '', expiryDays: -1 });
      currentCount += 1;
    } else {
      return;
    }
  }
}
