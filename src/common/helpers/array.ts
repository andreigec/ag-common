export const toObject = <T, Indexer extends string | number>(
  arr: T[],
  keyF: (a: T) => Indexer,
): { [a in Indexer]: T } | null => {
  if (!arr || !keyF) {
    return null;
  }

  const ret: { [a in Indexer]: T } = {} as { [a in Indexer]: T };
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
    if (row.length < max) {
      row = [...row, item];
    } else {
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
