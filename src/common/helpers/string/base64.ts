export const toBase64 = (str: string) => Buffer.from(str).toString('base64');
export const fromBase64 = (str: string) =>
  Buffer.from(decodeURIComponent(str), 'base64').toString();
