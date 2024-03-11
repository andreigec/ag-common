'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '../../helpers';
import { Hamburger } from '../../icons/Hamburger';
import { NoTextSelect } from '../../styles/common';
import { bigScreen, smallScreen, smallScreenPx } from '../../styles/media';
import { Chevron } from '../Chevron';

const closedSidebarHover = css`
  padding-left: 0.5rem;
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
`;

const Base = styled.div`
  position: sticky;
  top: 0;
  transition: all 200ms;
  border-right: solid 1px #ccc;
  height: 100vh;
  z-index: 1;

  ${NoTextSelect};
  &:hover {
    [data-type='content-block'] {
      left: 1rem;
    }
  }

  &[data-open='true'] {
    width: fit-content;

    @media ${smallScreen} {
      max-width: unset;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  &[data-open='false'] {
    ${closedSidebarHover};
  }

  :not([data-open]) {
    @media ${smallScreen} {
      ${closedSidebarHover};
    }
    @media ${bigScreen} {
      width: fit-content;
    }
  }
`;

const closedContentBlockOffScreen = css`
  left: -100vw;
  transition: left 200ms;
  height: 100%;
`;

const ContentBlock = styled.div`
  ${closedContentBlockOffScreen};
  &[data-open='false'] {
    position: absolute;
    top: 0;
    z-index: 1;
    width: fit-content;
  }

  :not([data-open]) {
    @media ${smallScreen} {
      position: absolute;
      ${closedContentBlockOffScreen};
    }
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

  &[data-hide-on-big='true'] {
    @media ${bigScreen} {
      display: none;
    }
  }

  &[data-open='false'] {
    top: 0.5rem;
    left: 0.25rem;
  }

  :not([data-open]) {
    @media ${bigScreen} {
      top: 0.5rem;
      right: -0.75rem;
    }
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
  children: React.ReactNode;
  className?: string;
  /** default:defaultClosed
   * defaultClosed: always closed by default.
   * fixedOpen: always open on bigscreen. cant close if bigscreen
   */
  mode?: 'defaultClosed' | 'fixedOpen';
}
export const Sidebar = ({
  children,
  className,
  mode = 'defaultClosed',
}: ISidebar) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean | null>(
    mode === 'defaultClosed' ? false : null,
  );

  useOnClickOutside(
    { ref, disabled: () => !open || window.innerWidth > smallScreenPx },
    () => {
      setOpen(false);
    },
  );

  return (
    <Base
      data-type="sidebar"
      className={className}
      data-open={open}
      onClick={() => !open && setOpen(true)}
      data-hover
      ref={ref}
    >
      <HamburgerB
        data-hide-on-big={mode === 'fixedOpen'}
        data-open={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        data-hover
      >
        {open ? <ChevronStyled point="left" width="100%" /> : <Hamburger />}
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
