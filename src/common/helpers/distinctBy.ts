/**
 * return a distinct array of items determined by a key function
 * @param data
 * @param key
 * @param ignoreEmpty
 */
export function distinctBy<T, TY>(
  data: T[],
  key: (item: T) => TY,
  ignoreEmpty?: boolean,
) {
  if (!data || data.length === 0) {
    return data;
  }

  const hashSet = new Set<TY>();

  return data.filter((x) => {
    let keyVal: TY;
    if (typeof key === 'string') {
      keyVal = x[key];
    } else {
      keyVal = key(x);
    }

    if (!keyVal && ignoreEmpty) {
      return false;
    }

    if (!hashSet.has(keyVal)) {
      hashSet.add(keyVal);
      return true;
    }
    return false;
  });
}
export const distinct = <T>(arr: readonly T[]) => [...new Set(arr)];
