import { warn } from '../../../common/helpers/log';
import { expireDate } from './const';

/**
 * parse cookie string into key values
 * @param cookieString
 * @returns
 */
export const getAllCookies = (cookieString?: string) => {
  const cookieKeyValuePairs: Record<string, string> = {};
  if (!cookieString) {
    return cookieKeyValuePairs;
  }

  // Split the cookie string into an array of strings
  const cookieArr = cookieString.split(';');

  // Loop through the array of strings
  for (let i = 0; i < cookieArr.length; i++) {
    // Split each string into an array of key and value
    const cookieKeyValue = cookieArr[i].split('=');
    // Add the key value pair to the object
    cookieKeyValuePairs[cookieKeyValue[0].trim()] = cookieKeyValue[1].trim();
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
}) => getAllCookies(cookieDocument)?.[name];

/**
 * expiryDays <0 will delete
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

/** delete all non httponly cookies */
export function wipeCookies(name: string) {
  if (typeof window === 'undefined') {
    warn('cant wipe cookies on server');
    return;
  }

  let currentCount = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (
      getCookie({
        name: name + currentCount,
        cookieDocument: '',
      })
    ) {
      setCookie({ name: name + currentCount, value: '', expiryDays: -1 });
      currentCount += 1;
    } else {
      return;
    }
  }
}
