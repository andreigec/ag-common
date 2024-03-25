import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export function useIsInViewport(ref: RefObject<HTMLElement>): boolean {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInViewport(entries[0].isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInViewport;
}
