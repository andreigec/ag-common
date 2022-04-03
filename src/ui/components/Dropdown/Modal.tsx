import { Modal, ModalItem } from '../Modal';
import React from 'react';
import styled from 'styled-components';

const ModalDropdownStyled = styled(Modal)`
  flex-flow: column;
`;

export const DropdownModal = (p: {
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
  <ModalDropdownStyled {...p} className={p.className}>
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
  </ModalDropdownStyled>
);
