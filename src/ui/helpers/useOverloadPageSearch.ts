'use client';
import { useEffect } from 'react';

export const useOverloadPageSearch = ({
  disabled = false,
  onTrigger,
}: {
  /**
   * default false
   */
  disabled?: boolean;
  onTrigger: () => void;
}) => {
  useEffect(() => {
    const ctrlF = (e: KeyboardEvent) => {
      const macSearch = e.metaKey && e.code === 'KeyF';
      const winSearch = e.ctrlKey && e.code === 'KeyF';
      if (winSearch || macSearch) {
        e.preventDefault();
        onTrigger();
      }
    };

    try {
      window.removeEventListener('keydown', ctrlF);
      if (!disabled) {
        window.addEventListener('keydown', ctrlF);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      //
    }

    return () => {
      try {
        window.removeEventListener('keydown', ctrlF);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        //
      }
    };
  }, [disabled, onTrigger]);
};
