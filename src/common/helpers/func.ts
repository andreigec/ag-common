import { error } from './log';

export function retry(
  name: string,
  fn: () => Promise<string>,
  retriesLeft = 3,
  interval = 1000,
) {
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
