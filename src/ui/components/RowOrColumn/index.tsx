'use client';
import styled from '@emotion/styled';
import type { CSSProperties, ReactNode } from 'react';
import React from 'react';

import { bigScreen, smallScreen, vSmallScreen } from '../../styles/media';

const Base = styled.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  width: 100%;
  @media ${bigScreen} {
    &[data-nowrap='true'] {
      flex-flow: row;
    }
  }
  &[data-break='small'] {
    @media ${smallScreen} {
      flex-flow: column;
    }
  }

  &[data-break='vsmall'] {
    @media ${vSmallScreen} {
      flex-flow: column;
    }
  }

  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
    width: auto;
  }
`;
export interface IRowOrColumn {
  noGrow?: boolean;
  center?: boolean;
  noWrap?: boolean;
  children: ReactNode;
  className?: string;
  break?: 'small' | 'vsmall';
  style?: CSSProperties;
  onClick?: () => void;
}
export type IFlexColumn = IRowOrColumn;
export type IFlexRow = IRowOrColumn;
export const RowOrColumn = (props: IRowOrColumn) => (
  <Base
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    data-nowrap={props.noWrap ?? false}
    {...props}
    data-break={props.break ?? 'small'}
  >
    {props.children}
  </Base>
);
