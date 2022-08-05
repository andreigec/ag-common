import { error } from './log';

export function retry<T>(
  name: string,
  fn: () => Promise<T>,
  retriesLeft = 3,
  interval = 1000,
): Promise<T> {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((e) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            error(`retry/${name} failed:${e}`);
            reject(e);
          } else {
            retry(name, fn, retriesLeft - 1, interval).then(resolve, reject);
          }
        }, interval);
      });
  });
}
