import { hashCode } from './hashCode';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const memoData: Record<string, any> = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function memo<T>(func: (...a: any) => T, ...args: any[]) {
  const hc = hashCode(JSON.stringify(args));

  if (!memoData[hc]) {
    memoData[hc] = func(...args) as T;
  }

  return memoData[hc] as T;
}
