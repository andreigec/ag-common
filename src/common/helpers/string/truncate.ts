/** truncate text */
export function truncate(
  /** string to truncate */
  str: string,
  /** max length */
  n: number,
  /** default '...' */
  ellip = '...',
) {
  if (!str) {
    return str;
  }
  return str.length > n ? str.substr(0, n - 1) + ellip : str;
}
