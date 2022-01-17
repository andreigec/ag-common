/* eslint-disable class-methods-use-this */
import { clearLocalStorageItem } from '.';
import { debug } from '../../common/helpers/log';
import { getLocalStorageItem, setLocalStorageItem } from './useLocalStorage';

export class MutexData<T> {
  subscriptions: {
    [a: string]: { [subId: string]: (ts: number) => void };
  } = {};

  subscribe(key: string, subId: string, func: (ts: number) => void) {
    if (!this.subscriptions[key]) {
      this.subscriptions[key] = { [subId]: func };
    }

    this.subscriptions[key][subId] = func;
  }

  unsubscribe(key: string, subId: string) {
    delete this.subscriptions[key][subId];
  }

  getData(key: string) {
    return getLocalStorageItem<T>(
      `mutex-${key}`,
      undefined as unknown as T,
      3600,
    );
  }

  pingSubscribers(key: string) {
    if (!this.subscriptions[key]) {
      debug('no subscribers');
      return;
    }

    Object.keys(this.subscriptions[key]).forEach((subKey) => {
      const ts = new Date().getTime();
      if (
        !this.subscriptions[key][subKey] ||
        typeof this.subscriptions[key][subKey] !== 'function'
      ) {
        this.unsubscribe(key, subKey);
      } else {
        this.subscriptions[key][subKey](ts);
      }
    });
  }

  setData({
    ttlSeconds = 3600,
    key,
    data,
  }: {
    key: string;
    data: T;
    ttlSeconds?: number;
  }) {
    setLocalStorageItem(`mutex-${key}`, data, ttlSeconds);
    if (Object.keys(this.subscriptions).length > 0) {
      this.pingSubscribers(key);
    }
  }

  delete(key: string, updateSubscribers = false) {
    clearLocalStorageItem(`mutex-${key}`);
    if (updateSubscribers) {
      if (Object.keys(this.subscriptions).length > 0) {
        this.pingSubscribers(key);
      }
    }
  }
}
