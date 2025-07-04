/* eslint-disable no-await-in-loop */
import { warn } from '../../common/helpers/log';
import { sleep } from '../../common/helpers/sleep';

export const withRetry = async <T>(
  operation: () => Promise<T>,
  operationName: string,
  opt?: {
    /** default 3. null for infinite */
    maxRetries?: number | null;
  },
): Promise<T> => {
  let retryCount = 0;
  const baseDelay = 2000;
  const { maxRetries = 3 } = opt ?? {};

  // eslint-disable-next-line
    while (true) {
    try {
      return await operation();
    } catch (e) {
      const error = e as Error;
      const errorString = error.toString().toLowerCase().replace(/\s+/gim, '');

      if (
        errorString.includes('429') ||
        errorString.includes('provisionedthroughputexceeded') ||
        errorString.includes('toolarge') ||
        errorString.includes('ratelimited')
      ) {
        retryCount++;

        if (maxRetries !== null && retryCount >= maxRetries) {
          warn(`${operationName}: Max retries exceeded`);
          throw error;
        }

        const delay = baseDelay + retryCount * 1000;
        warn(
          `${operationName}: Throttled. Retry ${retryCount}. Sleeping for ${delay}ms`,
        );
        await sleep(delay);
        continue;
      }

      throw error;
    }
  }
};
