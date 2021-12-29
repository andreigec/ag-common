let setTimeout: (handler: TimerHandler, timeout?: number | undefined) => number;
let clearTimeout: (handle?: number | undefined) => void;

if (typeof global !== 'undefined') {
  setTimeout = global.setTimeout;
  clearTimeout = global.clearTimeout;
} else {
  setTimeout = window.setTimeout;
  clearTimeout = window.clearTimeout;
}

export interface IMutex {
  capture(key: string): Promise<() => void>;
  isLocked: (key: string) => boolean;
}

export interface IMutexOptions {
  intervalMs?: number;
  autoUnlockTimeoutMs?: number;
  Promise?: PromiseConstructor;
}

type TResolve = (value: (() => void) | PromiseLike<() => void>) => void;
type TReject = (reason?: string) => void;
export class Mutex implements IMutex {
  public static defaultIntervalMs = 50;

  public static defaultAutoUnlockTimeoutMs = 3000;

  protected storage: Record<string, number> = {};

  protected options: IMutexOptions = {};

  constructor(options: IMutexOptions = {}) {
    this.options = {
      Promise: options.Promise || Promise,
      intervalMs: (options && options.intervalMs) || Mutex.defaultIntervalMs,
      autoUnlockTimeoutMs:
        (options && options.autoUnlockTimeoutMs) ||
        Mutex.defaultAutoUnlockTimeoutMs,
    };
  }

  public capture(key: string): Promise<() => void> {
    const P = this.options.Promise || Promise;

    return new P<() => void>((resolve, reject) => {
      this.checkMutexAndLock(key, resolve, reject);
    });
  }

  public isLocked = (key: string) => !!this.storage[key];

  protected checkMutexAndLock(
    key: string,
    resolve: TResolve,
    reject: TReject,
  ): void {
    if (!this.storage[key]) {
      const value = Date.now();
      this.storage[key] = value;

      const timeout = setTimeout(() => {
        delete this.storage[key];
      }, this.options.autoUnlockTimeoutMs);

      resolve(() => {
        clearTimeout(timeout);
        if (this.storage[key] === value) {
          delete this.storage[key];
        }
      });
    } else {
      setTimeout(
        this.checkMutexAndLock.bind(this, key, resolve, reject),
        this.options.intervalMs,
      );
    }
  }
}
