export function truncate(str: string, n: number, ellip: string) {
  if (!str) {
    return str;
  }
  return str.length > n ? str.substr(0, n - 1) + ellip : str;
}
