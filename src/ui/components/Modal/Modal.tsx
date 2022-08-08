import { IModal } from './types';
import { Close } from '../Close';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { bounce } from '../../styles';
import React, { useEffect, useRef, useState } from 'react';
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
  &[data-topposition='top'] {
    top: 0;
  }
  &[data-topposition='bottom'] {
    bottom: 0;
  }
  ${bounce('data-bounced')}
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
  topPosition = 'top',
  showCloseButton = true,
  closeOnMoveMouseOutside = false,
  className,
  closeOnClickOutside = true,
}: IModal) => {
  const [bounced, setBounced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(
    {
      disabled: !open,
      ref,
      moveMouseOutside: closeOnMoveMouseOutside,
    },
    () => {
      if (closeOnClickOutside && open) {
        setOpen(false);
        setBounced(false);
      }
    },
  );

  useEffect(() => {
    if (!bounced && open) {
      setBounced(true);
    }
  }, [open, bounced]);

  if (!open) {
    return <></>;
  }

  return (
    <FixedBackground>
      <ModalBase
        data-bounced={bounced}
        data-position={position}
        data-topposition={topPosition}
        ref={ref}
        className={className}
      >
        {showCloseButton && (
          <CloseStyled data-type="modal-close" onClick={() => setOpen(false)} />
        )}
        {children}
      </ModalBase>
    </FixedBackground>
  );
};
