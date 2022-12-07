/* eslint-disable no-bitwise */
export const hashCodeInt = (str: string, seed = 0) => {
  if (!str) {
    return '';
  }

  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;

  for (let i = 0, ch; i < str.length; i += 1) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);

  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const ret = 4294967296 * (2097151 & h2) + (h1 >>> 0);

  return ret;
};
export const hashCode = (str: string, seed = 0) =>
  hashCodeInt(str, seed).toString();
export const generateNewPK = () => hashCode(new Date().getTime().toString());
