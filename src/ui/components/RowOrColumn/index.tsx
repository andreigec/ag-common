import { bigScreen, smallScreen } from '../../styles/media';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Base = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 1;
  width: 100%;
  @media ${bigScreen} {
    &[data-nowrap='true'] {
      flex-flow: row;
    }
  }

  @media ${smallScreen} {
    flex-flow: column;
    overflow: unset;
  }

  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
    width: auto;
  }
  &[data-enableoverflow='true'] {
    overflow: visible;
  }
`;
export interface IRowOrColumn {
  noGrow?: boolean;
  center?: boolean;
  noWrap?: boolean;
  children: ReactNode;
  className?: string;
  title?: string;
  enableOverflow?: boolean;
}
export type IFlexColumn = IRowOrColumn;
export type IFlexRow = IRowOrColumn;
export const RowOrColumn = (props: IRowOrColumn) => (
  <Base
    title={props.title}
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    data-nowrap={props.noWrap ?? false}
    data-enableoverflow={props.enableOverflow ?? false}
    {...props}
  >
    {props.children}
  </Base>
);
