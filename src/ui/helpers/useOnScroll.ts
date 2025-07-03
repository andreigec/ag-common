'use client';
import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

import { debounce } from './debounce';
import { useGranularEffect } from './useGranularHook';

export interface IScroll {
  y: number;
  x: number;
  scrolled: boolean;
  isDown: boolean;
  scrollTopY: number;
  scrollTopX: number;
}

export function useOnScroll({
  onScroll,
  element,
}: {
  /**
   * defaults to window
   */
  element?: RefObject<HTMLDivElement> | null;
  /**
   * if provided will call on move
   */
  onScroll?: (e: Event, st: IScroll) => void;
} = {}) {
  const [state, setState] = useState<IScroll>({
    scrolled: false,
    x: 0,
    y: 0,
    isDown: false,
    scrollTopX: 0,
    scrollTopY: 0,
  });
  const [startScrollTopY, setStartScrollTopY] = useState(-1);
  useGranularEffect(
    () => {
      const listener = (e: Event) => {
        if (!element?.current) {
          return null;
        }
        const y = element.current.scrollTop ?? window.scrollY;
        const x = element.current.scrollLeft ?? window.scrollX;
        const r: IScroll = {
          y,
          x,
          scrolled: !!y || !!x,
          isDown: startScrollTopY < y,
          scrollTopX: x,
          scrollTopY: y,
        };
        setState(r);
        onScroll?.(e, r);
        return { y, x };
      };
      const listenDebounce = (e: Event) => {
        debounce(
          () => {
            const l = listener(e);
            if (l) {
              setStartScrollTopY(l.y);
            }
          },
          { key: 'onscroll', time: 20 },
        );
      };

      (element?.current ?? document).addEventListener(
        `scroll`,
        listenDebounce,
        {
          passive: true,
        },
      );

      return () => {
        try {
          (element?.current ?? document).removeEventListener(
            `scroll`,
            listenDebounce,
          );
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          //
        }
      };
    },
    [element],
    [element, onScroll, startScrollTopY],
  );

  useEffect(() => {
    if (startScrollTopY === -1 && !!element?.current) {
      setStartScrollTopY(element.current.scrollTop);
    }
  }, [element, startScrollTopY]);

  return state;
}
