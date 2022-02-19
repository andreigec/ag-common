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

    window.removeEventListener('keydown', ctrlF);
    if (!disabled) {
      window.addEventListener('keydown', ctrlF);
    }

    return () => window.removeEventListener('keydown', ctrlF);
  }, [disabled, onTrigger]);
};
