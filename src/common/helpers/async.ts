import { chunk, take } from './array';

/**
 * run async forEach over all array items
 * @param array
 * @param callback
 */
export async function asyncForEach<T>(
  array: T[],
  callback: (i: T, index: number, array: T[]) => void,
) {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}

/**
 * run async map over all array items
 * @param array
 * @param callback
 * @returns
 */
export async function asyncMap<T, TY>(
  array: T[],
  callback: (i: T, index: number, array: T[]) => Promise<TY>,
  opt?: {
    /** default 1 */
    maxConcurrency?: number;
  },
): Promise<TY[]> {
  const ret = [];
  const maxConcurrency = opt?.maxConcurrency ?? 1;
  let rem = array;
  let start = 0;
  while (rem.length > 0) {
    const { rest, part } = take(rem, maxConcurrency);
    rem = rest;
    const proms = part.map((p, i) => callback(p, start + i, array));
    start += part.length;
    const res = await Promise.all(proms);
    ret.push(...res);
  }

  return ret;
}
