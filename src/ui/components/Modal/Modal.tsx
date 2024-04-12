'use client';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { filterDataProps } from '../../helpers/dom';
import { useLockBodyScroll } from '../../helpers/useLockBodyScroll';
import { useOnClickOutside } from '../../helpers/useOnClickOutside';
import { bounce } from '../../styles';
import { Close } from '../Close';
import type { IModal } from './types';

const globalId = 'ag-modal-portal';

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
  box-shadow:
    0 1px 10px 0 rgba(0, 0, 0, 0.6),
    0 2px 15px 0 rgba(0, 0, 0, 0.05);
  max-width: 95vw;
  max-height: 95vh;
  overflow: hidden;
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

export const Modal = (p: IModal) => {
  const {
    open,
    setOpen,
    children,
    position = 'left',
    topPosition = 'top',
    showCloseButton = true,
    closeOnMoveMouseOutside = false,
    className,
    closeOnClickOutside = true,
    portalId: pidraw,
    style,
  } = p;
  let portalId = pidraw;
  if (portalId === undefined) {
    portalId = globalId;
  }

  useLockBodyScroll(p.open);
  const [portalElem, setPortalElem] = useState<Element | undefined | null>();

  useEffect(() => {
    if (
      portalId === null ||
      document.querySelectorAll(`#${portalId}`).length > 0
    ) {
      return;
    }
    const d = document.createElement('div');
    d.id = portalId;
    d.style.position = 'fixed';
    d.style.zIndex = '10';
    document.body.appendChild(d);
    return () => {
      try {
        document.querySelector(`#${portalId}`)?.remove();
      } catch (e) {
        //
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [bounced, setBounced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(
    {
      disabled: !open,
      ref,
      moveMouseOutside: closeOnMoveMouseOutside,
    },
    (e) => {
      //there might be multiple models open, only close the last one on the stack
      if (portalElem) {
        const myid = Array.prototype.indexOf.call(
          portalElem.children,
          //parent because fixed background is first
          ref.current?.parentElement,
        );
        const childcount = portalElem.children.length;
        if (myid + 1 !== childcount) {
          return;
        }
      }
      if (closeOnClickOutside && open) {
        setOpen(false, e);
        setBounced(false);
      }
    },
  );

  useEffect(() => {
    if (!bounced && open) {
      setBounced(true);
    }
  }, [open, bounced]);

  useEffect(() => {
    if (portalElem === undefined && portalId) {
      setPortalElem(document.getElementById(portalId));
    }
  }, [portalElem, portalId]);

  if (!open) {
    return <></>;
  }

  const Content = (
    <FixedBackground>
      <ModalBase
        {...filterDataProps(p)}
        data-bounced={bounced}
        data-position={position}
        data-topposition={topPosition}
        ref={ref}
        className={className}
        style={style}
      >
        {showCloseButton && (
          <CloseStyled
            data-type="modal-close"
            onClick={(e) => setOpen(false, e as unknown as Event)}
          />
        )}
        {children}
      </ModalBase>
    </FixedBackground>
  );
  if (portalId && portalElem === undefined) {
    return null;
  }
  if (portalId && portalElem) {
    return createPortal(Content, portalElem);
  }

  return Content;
};
