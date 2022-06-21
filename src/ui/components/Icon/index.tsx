import { HardOutline } from '../../styles/common';
import React from 'react';
import styled, { css } from 'styled-components';

export interface IIconProps {
  disabled?: boolean;
  fill?: string;
  outline?: string;
  /** default 100% */
  width?: string;
  /** default 100% */
  height?: string;
  rotate?: number;
  canHover?: boolean;
  /** default 'unset' */
  margin?: string;
  /** default 0 */
  padding?: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  children?: JSX.Element | JSX.Element[];
  role?: string;
  title?: string;
  tabIndex?: number;
  className?: string;
}
export const IconF = styled.span`
  transition: all 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: inherit;
  &[data-chnd='true'] {
    cursor: pointer;
    &:hover {
      filter: saturate(3);
    }
  }

  > svg {
    flex-grow: 1;
  }

  fill: var(--fill);

  svg {
    fill: var(--fill);
  }

  linearGradient > *,
  radialGradient > * {
    stop-color: var(--fill) !important;
  }

  ${HardOutline}

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = (pr: IIconProps) => {
  const { className, children, disabled, onClick } = pr;
  const CHND = pr.canHover && !pr.disabled;
  const style: Record<string, string> = {
    '--fill': pr.fill || '',
    width: pr.width || '100%',
    height: pr.height || '100%',
    padding: pr.padding || '0',
    margin: pr.margin || 'unset',
    transform: !pr.rotate ? '' : `rotate(${pr.rotate || 0}deg)`,
    filter: !pr.disabled ? '' : 'grayscale(1)',
    '--outlinecolour': pr.outline || '',
  };

  return (
    <IconF
      {...pr}
      className={className}
      onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
        !disabled && onClick?.(e)
      }
      style={style}
      data-chnd={CHND}
    >
      {children}
    </IconF>
  );
};
