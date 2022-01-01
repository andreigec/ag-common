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
): Promise<TY[]> {
  const ret = [];
  for (let index = 0; index < array.length; index += 1) {
    ret.push(await callback(array[index], index, array));
  }
  return ret;
}
