import { IRowOrColumn } from '../RowOrColumn';
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
  &[data-enableoverflow='false'] {
    overflow: hidden;
    max-width: 100%;
  }
`;

export const FlexColumn = (props: IRowOrColumn) => (
  <Base
    title={props.title}
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    data-enableoverflow={props.enableOverflow ?? false}
    {...props}
  >
    {props.children}
  </Base>
);
