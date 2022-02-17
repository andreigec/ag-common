/* eslint-disable react/destructuring-assignment */
import { colours } from '../../styles/colours';
import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

export const ButtonBase = css`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;

  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  height: 3rem;
  line-height: 1rem;
  &:hover {
    filter: saturate(1.5);
  }
  padding-left: 1rem;
  padding-right: 1rem;

  background-color: ${colours.darkGreen};
  color: white;
  &[data-invert='true'] {
    color: ${colours.darkGreen};
    background-color: white;
    border: solid 1px ${colours.darkGreen};
  }

  &[data-disabled='true'] {
    cursor: default;
    background-color: #888;
  }
`;

const Base = styled.button`
  ${ButtonBase}
`;

export const Button: React.FC<{
  title?: string;
  invert?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyPress?: KeyboardEventHandler<HTMLButtonElement>;
}> = (props) => (
  <Base
    className={props.className}
    data-invert={props.invert}
    data-disabled={props.disabled ?? false}
    {...props}
    role="button"
    title={props.title || undefined}
  >
    {props.children}
  </Base>
);
