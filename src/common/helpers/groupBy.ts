/**
 * group an array of items by the output of a key function
 * @param arr
 * @param getKey
 */
export function groupBy<T, TY extends string | number>(
  arr: T[],
  getKey: (i: T) => TY,
): { [key in TY]: T[] } {
  const ret: { [key in TY]: T[] } = {} as { [key in TY]: T[] };
  arr.forEach((item) => {
    const key = getKey(item);
    if (!ret[key]) {
      ret[key] = [];
    }

    ret[key].push(item);
  });

  return ret;
}

/**
 * group an array of items by the output of a key function
 * @param arr
 * @param getKey
 */
export function groupByList<T, TY>(
  arr: T[],
  getKey: (i: T) => TY,
): { key: TY; items: T[] }[] {
  const ret: { key: TY; items: T[] }[] = [];
  arr.forEach((item) => {
    const key = getKey(item);
    const i = ret.find((r) => r.key === key);
    if (!i) {
      ret.push({ key, items: [item] });
    } else {
      i.items.push(item);
    }
  });

  return ret;
}

export function groupByTwice<T>(
  arr: T[],
  getKey: (i: T) => string | number,
  getSubKey: (i: T) => string | number,
): { [key in string | number]: { [a in string | number]: T } } {
  const ret: { [key in string | number]: { [a in string | number]: T } } = {};
  arr.forEach((item) => {
    const key = getKey(item);
    const subkey = getSubKey(item);
    if (!ret[key]) {
      ret[key] = {};
    }

    ret[key][subkey] = item;
  });

  return ret;
}
