import { useEffect, useState } from 'react';

import { bigScreenPx, smallScreenPx } from '../styles/media';

export interface Dimensions {
  width: number;
  height: number;
  smallScreen: boolean;
  bigScreen: boolean;
  vBigScreen: boolean;
}
function getWindowDimensions(): Dimensions | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    smallScreen: width <= smallScreenPx,
    bigScreen: width > smallScreenPx,
    vBigScreen: width > bigScreenPx,
  } as Dimensions;
}

export function useResize() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      const wd = getWindowDimensions();
      if (JSON.stringify(windowDimensions) === JSON.stringify(wd)) {
        return;
      }

      setWindowDimensions(wd);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowDimensions]);

  return windowDimensions;
}
