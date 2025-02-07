'use client';
import type { RefObject } from 'react';
import { useEffect } from 'react';

import { isRightClick } from './dom';

type Event = MouseEvent | TouchEvent;
export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  p: {
    ref: RefObject<T | null>;
    /** can either be a boolean, or a callback */
    disabled?: boolean | (() => boolean);
    /** if true, will also consider moving mouse outside div. default false */
    moveMouseOutside?: boolean;
  },
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const disabled =
        !p.disabled || typeof p.disabled === 'boolean'
          ? (p.disabled ?? false)
          : p.disabled();

      if (disabled) {
        return;
      }

      //
      const isRightMB = isRightClick(event);
      if (isRightMB) {
        return;
      }

      const el = p.ref.current as unknown as Element | undefined;
      if (!el) {
        return;
      }

      //walk dom tree to see if nodes match
      let n = event.target as unknown as Element | undefined;
      let found = false;
      while (n) {
        if (n.isEqualNode(el)) {
          found = true;
          break;
        }
        n = n.parentNode as Element;
      }

      if (found) {
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
      try {
        document.removeEventListener(`mousedown`, listener);
        document.removeEventListener(`touchstart`, listener);
        document.removeEventListener(`mousemove`, listener);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        //
      }
    };
    // Reload only if ref or handler changes
  }, [p, handler]);
}
