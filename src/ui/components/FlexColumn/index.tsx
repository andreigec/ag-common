'use client';
import styled from '@emotion/styled';
import React from 'react';

import type { IFlexColumn } from '../RowOrColumn';

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

export const FlexColumn = (props: IFlexColumn) => (
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
