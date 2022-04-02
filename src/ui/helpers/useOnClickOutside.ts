import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  p: {
    /**
     * default false
     */
    disabled?: boolean;

    ref: RefObject<T>;
    moveMouseOutside?: boolean;
  },
  handler: (event: Event) => void,
) {
  useEffect(() => {
    if (p.disabled || typeof window === 'undefined') {
      return () => {};
    }

    const listener = (event: Event) => {
      const el = p.ref?.current;
      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);
    if (p.moveMouseOutside) {
      document.addEventListener(`mousemove`, listener);
    }

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
      document.removeEventListener(`mousemove`, listener);
    };
    // Reload only if ref or handler changes
  }, [p, handler]);
}
