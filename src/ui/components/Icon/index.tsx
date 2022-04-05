import { HardOutline } from '../../styles/common';
import React from 'react';
import styled, { css } from 'styled-components';

export interface IIconProps {
  disabled?: boolean;
  fill?: string;
  outline?: string;
  width?: string;
  height?: string;
  rotate?: number;
  canHover?: boolean;
  margin?: string;
  padding?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  children?: JSX.Element | JSX.Element[];
  role?: string;
  title?: string;
  tabIndex?: number;
  className?: string;
}
export const IconF = styled.span<IIconProps>`
  transition: all 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => (!margin ? 'unset' : margin)};
  cursor: ${({ disabled, canHover }) =>
    disabled || !canHover ? 'inherit' : 'pointer'};
  > svg {
    flex-grow: 1;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(1);
    `}
  ${({ canHover, disabled }) =>
    canHover &&
    !disabled &&
    css`
      &:hover {
        filter: saturate(3);
      }
    `}

  

  ${({ fill }) =>
    fill &&
    css`
      fill: ${fill};

      svg {
        fill: ${fill};
      }

      linearGradient > *,
      radialGradient > * {
        stop-color: ${fill} !important;
      }
    `};
  ${({ outline }) => outline && HardOutline(outline)};

  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(${rotate}deg);
    `};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = (pr: IIconProps) => {
  const { className, children, disabled, onClick } = pr;

  return (
    <IconF
      {...pr}
      className={className}
      onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
        !disabled && onClick?.(e)
      }
    >
      {children}
    </IconF>
  );
};
