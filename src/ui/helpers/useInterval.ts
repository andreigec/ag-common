import { useEffect, useLayoutEffect, useRef } from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;

export function useInterval<T>(
  callback: () => T,
  /** ms delay */
  delay: number | null,
  opt?: {
    /** called when cleaning up useEffect */
    onEnd?: () => void;
    /** will be passed result of callback, and can cancel interval if passed */
    determineEnd?: (v: T) => boolean;
  },
) {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => {
      const res = savedCallback.current();
      if (opt?.determineEnd?.(res)) {
        clearInterval(id);
        opt?.onEnd?.();
      }
    }, delay);

    return () => {
      clearInterval(id);
      opt?.onEnd?.();
    };
  }, [opt, delay]);
}
