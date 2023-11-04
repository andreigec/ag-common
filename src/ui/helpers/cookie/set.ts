import { toBase64 } from '../../../common/helpers/string/base64';
import { chunkString } from '../../../common/helpers/string/chunk';
import { maxCookieLen } from './const';
import { setCookie, wipeCookies } from './raw';
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

  if (p.value === undefined) {
    return;
  }

  const str = toBase64(stringify(p.value));
  const chunks = chunkString(str, maxCookieLen);

  for (const index1 in chunks) {
    const chunk = chunks[index1];
    setCookie({ ...p, name: p.name + index1, value: chunk });
  }
}

export const setCookieString = (p: {
  value: string;
  name: string;
  cookieDocument?: string;
}) => setCookieRawWrapper({ ...p, stringify: (s) => s });
