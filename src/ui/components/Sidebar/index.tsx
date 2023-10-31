'use client';
import styled from '@emotion/styled';
import React, { useRef } from 'react';

import { useOnClickOutside } from '../../helpers';
import { useCookieBoolean } from '../../helpers/cookie/use';
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

const Hamburger = styled.div`
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  className?: string;
  /**
   * used for localstorage. default 'sidebar'
   */
  key?: string;
  /**
   * optionally pass in SSR cookiedocument
   */
  cookieDocument?: string;
}
export const Sidebar = ({
  children,
  className,
  key = 'sidebar',
  cookieDocument,
}: ISidebar) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useCookieBoolean({
    name: key,
    defaultValue: false,
    cookieDocument: cookieDocument,
  });
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
      <Hamburger data-open={open} onClick={() => setOpen(!open)} data-hover>
        <ChevronStyled point={open ? 'left' : 'right'} width="100%" />
      </Hamburger>
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
