/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
  }
  overflow: visible;
  &[data-allowoverflow='false'] {
    overflow: hidden;
    max-width: 100%;
  }
`;

export const FlexColumn: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    noGrow?: boolean;
    center?: boolean;
    allowOverflow?: boolean;
  }
> = (props) => (
  <Base
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    data-allowoverflow={props.allowOverflow ?? false}
    {...props}
  >
    {props.children}
  </Base>
);
