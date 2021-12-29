/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { bigScreen, smallScreen } from '../../styles/media';

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

export const RowOrColumn: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    noGrow?: boolean;
    center?: boolean;
    noWrap?: boolean;
  }
> = (props) => (
  <Base
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    data-nowrap={props.noWrap ?? false}
    {...props}
  >
    {props.children}
  </Base>
);
