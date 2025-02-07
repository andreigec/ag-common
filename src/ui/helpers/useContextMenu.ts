'use client';
import { useCallback, useEffect, useState } from 'react';

export const useContextMenu = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');
  const [showMenu, setShowMenu] = useState(false);
  const handleContextMenu = useCallback(
    (e: any) => {
      if (!ref.current?.contains(e.target)) {
        return;
      }

      e.preventDefault();
      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
    },
    [ref],
  );

  const handleClick = useCallback(() => {
    if (!showMenu) {
      return;
    }

    setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      try {
        document.addEventListener('click', handleClick);
        document.removeEventListener('contextmenu', handleContextMenu);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        //
      }
    };
  });

  return { xPos, yPos, showMenu };
};
