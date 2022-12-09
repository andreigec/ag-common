import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colours } from '../../styles/colours';

export const ValueBox = styled.div`
  padding: 0.5rem;

  display: flex;
  position: relative;
  align-items: center;
  background-color: white;

  justify-content: flex-start;
  flex-grow: 1;
  width: calc(100% - 1rem - 2px); //padding + border
  border: solid 1px transparent;

  &[data-pointer='true'] {
    cursor: pointer;
  }
  &[data-nogrow='true'] {
    flex-grow: 0;
  }
`;

export const valueCss = css`
  width: 100%;
  height: 100%;
  word-break: break-all;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;

  &[data-type='checkbox'] {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ValueInputCB = styled.input`
  ${valueCss};
`;

export const IconD = styled.div`
  z-index: 1;
  font-size: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  cursor: pointer;
  svg {
    fill: ${colours.notificationBlue};
  }
`;
export const iconRight = { right: '0' };
export const iconLeft = { right: '1.5rem' };
