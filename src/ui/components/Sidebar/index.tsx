'use client';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '../../helpers';
import { Hamburger } from '../../icons/Hamburger';
import { NoTextSelect } from '../../styles/common';
import { smallScreen, smallScreenPx } from '../../styles/media';
import { Chevron } from '../Chevron';

const Base = styled.div`
  position: relative;
  transition: all 200ms;
  border-right: solid 1px #ccc;
  padding-left: 0.5rem;
  height: 100vh;

  &[data-open='true'] {
    width: 80vw;
    max-width: 30rem;
    @media ${smallScreen} {
      max-width: unset;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  &[data-open='false'] {
    width: 0.5rem;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover,
    &:hover [data-hover='true'] {
      background-color: #ccc;
    }
    &:hover {
      border-right: solid 1px #999;
    }
  }
  ${NoTextSelect};

  &:hover {
    [data-type='content-block'] {
      left: 1rem;
    }
  }
`;

const ContentBlock = styled.div`
  left: -30rem;
  transition: left 200ms;
  height: 100%;
  &[data-open='false'] {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 80vw;
    max-width: 30rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;

  &[data-open='false'] {
    filter: drop-shadow(1px 1px 0.5rem #555);
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const HamburgerB = styled.div`
  position: absolute;
  transition: all 200ms;
  z-index: 2;
  &[data-open='false'] {
    top: 0.5rem;
    left: 0.25rem;
  }
  &[data-open='true'] {
    top: 0.5rem;
    right: -0.75rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.25rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const ChevronStyled = styled(Chevron)`
  svg {
    fill: #555;
  }
`;

export interface ISidebar {
  children: ReactNode;
  className?: string;
}
export const Sidebar = ({ children, className }: ISidebar) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOnClickOutside({ ref }, () => {
    if (!open || window.innerWidth > smallScreenPx) {
      return;
    }
    setOpen(false);
  });

  return (
    <Base
      data-type="sidebar"
      className={className}
      data-open={open}
      onClick={() => !open && setOpen(true)}
      data-hover
      ref={ref}
    >
      <HamburgerB data-open={open} onClick={() => setOpen(!open)} data-hover>
        {open ? <ChevronStyled point={'left'} width="100%" /> : <Hamburger />}
      </HamburgerB>
      <ContentBlock data-type="content-block" data-open={open}>
        <Content
          data-type="content"
          data-open={open}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </Content>
      </ContentBlock>
    </Base>
  );
};
