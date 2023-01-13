import { useEffect, useLayoutEffect, useRef } from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;

export function useInterval(
  callback: () => void,
  /** ms delay */
  delay: number | null,
  /** optionally called on return of useEffect */
  clear?: () => void,
) {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => {
      clearInterval(id);
      clear?.();
    };
  }, [clear, delay]);
}
