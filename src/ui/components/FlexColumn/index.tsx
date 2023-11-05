'use client';
import styled from '@emotion/styled';
import React from 'react';

import type { IFlexColumn } from '../RowOrColumn';

const Base = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  &[data-center='true'] {
    justify-content: center;
    align-items: center;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
    width: unset;
    height: unset;
  }
`;

export const FlexColumn = (props: IFlexColumn) => (
  <Base
    data-nogrow={props.noGrow ?? false}
    data-center={props.center ?? false}
    {...props}
  >
    {props.children}
  </Base>
);
