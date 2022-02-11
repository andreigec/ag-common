export const expireDate = 'Thu, 01 Jan 1970 00:00:00 UTC';
export const maxCookieLen = 4000;
export type Dispatch<A> = (value: A) => void;
export type SetStateAction<S> = S | ((prevState: S) => S);
export type ReturnType<T> = [T, Dispatch<SetStateAction<T>>];
export type TParse<T> = (s: string | null | undefined) => T;
