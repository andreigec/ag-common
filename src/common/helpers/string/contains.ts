/**
 * returns >-1 if found
 * @param str
 * @param args
 * @returns
 */
export function containsInsensitiveIndex(
  {
    str,
    fromLast = false,
  }: {
    /**
     * if true, will return highest number. default false
     */
    fromLast?: boolean;
    str: string;
  },
  ...args: string[]
) {
  if (!str) {
    return -1;
  }

  const largs = args.map((a) => a.toLowerCase());
  const lstr = str.toLowerCase();
  const finds = largs
    .map((arg) => (fromLast ? lstr.lastIndexOf(arg) : lstr.indexOf(arg)))
    .filter((s) => s !== -1)
    .sort();

  if (finds.length === 0) {
    return -1;
  }
  return !fromLast ? finds[0] : finds[finds.length - 1];
}

/**
 * returns true if text is found
 * @param str
 * @param args
 * @returns
 */
export const containsInsensitive = (str: string, ...args: string[]) =>
  containsInsensitiveIndex({ str }, ...args) !== -1;

/**
 * returns list of found indexes
 * @param str
 * @param args
 * @returns
 */
export function containsInsensitiveIndexes({
  haystack,
  needle,
  fromLast = false,
  maxFound = 10,
}: {
  /**
   * if true, will return highest number. default false
   */
  fromLast?: boolean;
  haystack: string;
  needle: string;
  /** if provided will stop after maxfound */
  maxFound?: number;
}) {
  if (!haystack || !needle) {
    return [-1];
  }

  const lstr = haystack.toLowerCase();
  const indexes: number[] = [];
  let lastIndex: number | undefined;
  while (lastIndex !== -1) {
    if (indexes.length >= maxFound) {
      break;
    }
    lastIndex = fromLast
      ? lstr.lastIndexOf(needle, lastIndex)
      : lstr.indexOf(needle, lastIndex);
    if (lastIndex === -1) {
      break;
    }
    indexes.push(lastIndex);
    lastIndex += 1;
  }

  return indexes;
}
