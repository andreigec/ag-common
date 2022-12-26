export function truncate(
  str: string | null | undefined,
  n: number,
  ellip: string,
) {
  if (!str) {
    return undefined;
  }
  return str.length > n ? str.substr(0, n - 1) + ellip : str;
}
