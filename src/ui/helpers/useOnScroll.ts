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

export function useOnScroll() {
  const [state, setState] = useState<IScroll>({ scrolled: false, x: 0, y: 0 });
  useEffect(() => {
    const listener = () => {
      const y = window.scrollY;
      const x = window.scrollX;
      const r: IScroll = { y, x, scrolled: !!y || !!x };
      setState(r);
    };

    document.addEventListener(`scroll`, debounce(listener, 10), {
      passive: true,
    });

    return () => {
      document.removeEventListener(`scroll`, listener);
    };
  }, []);
  return state;
}
