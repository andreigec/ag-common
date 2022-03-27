import { useEffect, useState } from 'react';

export interface IScroll {
  y: number;
  x: number;
  scrolled: boolean;
}
function debounce<T>(
  callback: (args: T[]) => void,
  time: number,
  ...args: T[]
) {
  let interval: ReturnType<typeof setTimeout>;

  return () => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval?.unref?.();

      // eslint-disable-next-line
      callback(args);
    }, time);
  };
}

export function useOnScroll({
  onScroll,
  element,
}: {
  /**
   * defaults to window
   */
  element?: Element;
  /**
   * if provided will call on move
   */
  onScroll?: (e: Event, st: IScroll) => void;
} = {}) {
  const [state, setState] = useState<IScroll>({ scrolled: false, x: 0, y: 0 });
  useEffect(() => {
    const listener = (e: Event) => {
      const y = element?.scrollTop ?? window.scrollY;
      const x = element?.scrollLeft ?? window.scrollX;
      const r: IScroll = { y, x, scrolled: !!y || !!x };
      setState(r);
      onScroll?.(e, r);
    };

    document.addEventListener(
      `scroll`,
      (e) => debounce<Event>(() => listener(e), 10),
      {
        passive: true,
      },
    );

    return () => {
      document.removeEventListener(`scroll`, listener);
    };
  }, [element, onScroll]);
  return state;
}
