import { useLayoutEffect } from 'react';

export function useLockBodyScroll(enabled: boolean) {
  useLayoutEffect(() => {
    let originalStyle: string | undefined;
    if (enabled) {
      originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (enabled) {
        document.body.style.overflow = originalStyle || '';
      }
    };
  }, [enabled]);
}
