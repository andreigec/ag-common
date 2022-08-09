import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Base = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;

  &[data-nowrap='true'] {
    flex-flow: row;
  }

  &[data-nogrow='true'] {
    flex-grow: 0;
  }
  &[data-nogrow='false'] {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }

  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }

  &[data-enableoverflow='true'] {
    overflow: visible;
  }
`;

export const FlexRow = (props: {
  noWrap?: boolean;
  noGrow?: boolean;
  center?: boolean;
  enableOverflow?: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <Base
    data-nowrap={props.noWrap ?? false}
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    data-enableoverflow={props.enableOverflow ?? false}
    {...props}
  >
    {props.children}
  </Base>
);
