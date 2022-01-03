/* eslint-disable no-await-in-loop */
export async function runGenerator<T>(
  iter: AsyncGenerator<T[], T[], unknown>,
  partialRun: (value: T[]) => Promise<void>,
) {
  let curr: IteratorResult<T[], T[]>;

  do {
    curr = await iter.next();
    if (!curr?.value || curr.value.length === 0) {
      return;
    }

    await partialRun(curr.value);
  } while (!curr.done);
}
