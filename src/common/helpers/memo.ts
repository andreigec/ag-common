import { hashCode } from './hashCode';

const memoData: Record<string, any> = {};

export function memo<T>(func: (...a: any) => T, ...args: any[]) {
  const hc = hashCode(JSON.stringify(args));

  if (!memoData[hc]) {
    memoData[hc] = func(...args) as T;
  }

  return memoData[hc] as T;
}
