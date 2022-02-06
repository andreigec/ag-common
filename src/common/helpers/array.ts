export const toObject = <T, Indexer extends string | number>(
  arr: T[],
  keyF: (a: T) => Indexer,
): { [a in Indexer]: T } => {
  const ret: { [a in Indexer]: T } = {} as { [a in Indexer]: T };
  if (!arr || !keyF) {
    return ret;
  }

  arr.forEach((v) => {
    const k = keyF(v);
    ret[k] = v;
  });
  return ret;
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const flat = <T>(arr: T[][]): T[] => [].concat(...arr);

export const take = <T>(array: T[], num: number): { part: T[]; rest: T[] } => {
  const ret = JSON.parse(JSON.stringify(array));

  return { part: ret.slice(0, num), rest: ret.slice(num) };
};

export const chunk = <T>(array: T[], max: number): T[][] => {
  const rows: T[][] = [];
  let row: T[] = [];

  for (const k in array) {
    const item = array[k];
    row.push(item);
    if (row.length >= max) {
      rows.push(row);
      row = [];
    }
  }

  if (row.length > 0) {
    rows.push(row);
  }
  return rows;
};
export const partition = <T>(array: T[], func: (v: T) => boolean) =>
  !array?.length
    ? null
    : [array.filter((r) => func(r)), array.filter((r) => !func(r))];

export function notEmpty<TValue>(
  value: TValue | null | undefined | false,
): value is TValue {
  return value !== null && value !== undefined && value !== false;
}

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
export const distinct = <T extends string | number>(arr: readonly T[]) => [
  ...new Set(arr),
];
