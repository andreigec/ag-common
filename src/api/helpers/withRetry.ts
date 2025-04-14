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
  var baseDelay = 1000;
  let { maxRetries = 3 } = opt ?? {};

  // eslint-disable-next-line
    while (true) {
    try {
      return await operation();
    } catch (e) {
      const error = e as Error;
      const errorString = error.toString().toLowerCase();

      if (
        errorString.includes('429') ||
        errorString.includes('provisionedthroughputexceeded') ||
        errorString.includes('too large')
      ) {
        retryCount++;

        if (maxRetries !== null && retryCount >= maxRetries) {
          warn(`${operationName}: Max retries exceeded`);
          throw error;
        }

        const delay = baseDelay * retryCount;
        warn(`${operationName}: Throttled. Retry ${retryCount}. Sleeping for ${delay}ms`);
        await sleep(delay);
        continue;
      }

      throw error;
    }
  }
};
