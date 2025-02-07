'use client';

import { css } from '@emotion/react';
import type { StyledComponent } from '@emotion/styled';
import styled from '@emotion/styled';
import type { JSX, KeyboardEventHandler, MouseEventHandler } from 'react';
import React from 'react';

import { colours } from '../../styles/colours';

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
  color: white;

  &[data-disabled='true'] {
    cursor: default !important;
    background-color: #888 !important;
  }

  &[data-theme='green'] {
    background-color: ${colours.darkGreen};
    &[data-invert='true'] {
      color: ${colours.darkGreen};
      background-color: white;
      border: solid 1px ${colours.darkGreen};
    }
  }

  &[data-theme='red'] {
    background-color: ${colours.orangeRed};
    &[data-invert='true'] {
      color: ${colours.orangeRed};
      background-color: white;
      border: solid 1px ${colours.orangeRed};
    }
  }
`;

const BaseButton = styled.button`
  ${ButtonBase}
`;

const BaseA = styled.a`
  ${ButtonBase}
`;

export interface IButton {
  title?: string;
  invert?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  children: string | JSX.Element;
  href?: string;
  colourTheme?: 'green' | 'red';
}
export const Button = (props: IButton) => {
  const Component: StyledComponent<'button', any> = props.href
    ? (BaseA as any)
    : BaseButton;

  return (
    <Component
      className={props.className}
      data-invert={props.invert}
      data-disabled={props.disabled ?? false}
      role="button"
      title={props.title || undefined}
      data-theme={props.colourTheme ?? 'green'}
      {...props}
    >
      {props.children}
    </Component>
  );
};
