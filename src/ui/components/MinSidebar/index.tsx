'use client';
import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
import React, { useRef, useState } from 'react';

import { useOnClickOutside } from '../../helpers';
import { NoTextSelect } from '../../styles/common';
import { smallScreenPx } from '../../styles/media';
import { Chevron } from '../Chevron';
import { Icon } from '../Icon';

const Base = styled.div`
  position: sticky;
  top: 0;
  border-right: solid 1px #ccc;
  height: 100%;
  ${NoTextSelect};
  width: fit-content;
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  > div {
    flex-basis: 100%;
  }
`;

const OpenIcon = styled(Icon)`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  margin-left: auto;
`;

const ChevronStyled = styled(Chevron)`
  svg {
    fill: #555;
  }
`;

export interface IMinSidebar {
  children: ({
    open,
  }: {
    /** can make sidebar contents smaller when open=false */
    open: boolean;
  }) => React.ReactNode;
  className?: string;
  /** default white */
  chevronColour?: string;
  style?: CSSProperties;
}
export const MinSidebar = ({
  chevronColour,
  children,
  className,
  style,
}: IMinSidebar) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useOnClickOutside(
    { ref, disabled: () => !open || window.innerWidth > smallScreenPx },
    () => {
      setOpen(false);
    },
  );

  return (
    <Base
      style={style}
      data-type="sidebar"
      className={className}
      data-open={open}
      onClick={() => !open && setOpen(true)}
      ref={ref}
    >
      <Content
        data-type="content"
        data-open={open}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <OpenIcon
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <ChevronStyled
            data-open={open}
            point={open ? 'left' : 'right'}
            width="100%"
            colour={chevronColour ?? 'white'}
          />
        </OpenIcon>
        {children({ open })}
      </Content>
    </Base>
  );
};
