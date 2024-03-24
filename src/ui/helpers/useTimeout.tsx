'use client';
import { useEffect, useRef } from 'react';

export function useTimeout(
  callback: () => void | Promise<void>,
  /** if null wont trigger */
  delay: number | null,
) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id: NodeJS.Timeout | undefined;
    function tick() {
      const ret = savedCallback.current();

      if (ret instanceof Promise) {
        void ret.then(() => {
          if (delay !== null) {
            id = setTimeout(tick, delay);
          }
        });
      } else {
        if (delay !== null) {
          id = setTimeout(tick, delay);
        }
      }
    }
    if (delay !== null) {
      id = setTimeout(tick, delay);
      return () => id && clearTimeout(id);
    }
  }, [delay]);
}
