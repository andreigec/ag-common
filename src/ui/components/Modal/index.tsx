import { Close } from '../Close';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import React, { useRef } from 'react';
import styled from 'styled-components';
const FixedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBase = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  background-color: white;
  border: solid 1px transparent;
  border-radius: 0.5rem;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.6), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  max-width: 95vw;
  max-height: 95vh;
  &[data-position='left'] {
    left: 0;
  }
  &[data-position='right'] {
    right: 0;
  }
  &[data-topposition='bottom'] {
    top: 0;
  }
  &[data-topposition='top'] {
    bottom: 0;
  }
`;
export const ModalItem = styled.div`
  display: flex;
  padding: 1rem;

  &:hover {
    background-color: #eee;
  }
`;
const CloseStyled = styled(Close)`
  z-index: 1;
`;

export const Modal = ({
  open,
  setOpen,
  children,
  position = 'left',
  topPosition = 'bottom',
  showCloseButton = true,
  closeOnMoveMouseOutside = false,
  className,
  closeOnClickOutside = true,
}: {
  open: boolean;
  setOpen: (b: boolean) => void;
  children: JSX.Element | JSX.Element[];
  position?: 'left' | 'right' | 'center';
  topPosition?: 'bottom' | 'top' | 'center';
  showCloseButton?: boolean;
  closeOnMoveMouseOutside?: boolean;
  className?: string;
  closeOnClickOutside?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside({ ref, moveMouseOutside: closeOnMoveMouseOutside }, () => {
    if (closeOnClickOutside && open) {
      setOpen(false);
    }
  });

  if (!open) {
    return <></>;
  }

  return (
    <FixedBackground>
      <ModalBase
        data-position={position}
        data-topposition={topPosition}
        ref={ref}
        className={className}
      >
        {showCloseButton && <CloseStyled onClick={() => setOpen(false)} />}
        {children}
      </ModalBase>
    </FixedBackground>
  );
};

const ModalDropListStyled = styled(Modal)`
  flex-flow: column;
`;

export const ModalDropList = (p: {
  options: (string | JSX.Element)[];
  onSelect?: (
    i: number,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  position?: 'left' | 'right';
  topPosition?: 'bottom' | 'top';
  open: boolean;
  setOpen: (b: boolean) => void;
  closeOnMoveMouseOutside?: boolean;
  showCloseButton?: boolean;
  className?: string;
}) => (
  <ModalDropListStyled {...p} className={p.className}>
    {p.options.map((option, index) => (
      <ModalItem
        key={option as unknown as never}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          p.onSelect?.(index, e);
          p.setOpen(false);
        }}
      >
        {option}
      </ModalItem>
    ))}
  </ModalDropListStyled>
);
