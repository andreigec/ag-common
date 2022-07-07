import { useCallback, useEffect, useState } from 'react';

export const useContextMenu = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');
  const [showMenu, setShowMenu] = useState(false);
  const handleContextMenu = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      document.addEventListener('click', handleClick);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  });

  return { xPos, yPos, showMenu };
};
