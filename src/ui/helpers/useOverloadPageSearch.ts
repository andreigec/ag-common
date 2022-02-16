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
      if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
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
