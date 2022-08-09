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
`;

export const RowOrColumn = (props: {
  noGrow?: boolean;
  center?: boolean;
  noWrap?: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <Base
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    data-nowrap={props.noWrap ?? false}
    {...props}
  >
    {props.children}
  </Base>
);
