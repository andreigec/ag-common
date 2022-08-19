import { HardOutline } from '../../styles/common';
import { removeUndefValuesFromObject } from '../../../common/helpers/object';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export interface IIcon {
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
  children?: ReactNode;
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

  &[data-hasfill='true'] {
    fill: var(--fill);

    svg {
      fill: var(--fill);
    }

    linearGradient > *,
    radialGradient > * {
      stop-color: var(--fill) !important;
    }
  }

  &[data-hasoutline='true'] {
    ${HardOutline}
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = (pr: IIcon) => {
  const { className, children, disabled, onClick } = pr;
  const CHND = pr.canHover && !pr.disabled;
  const style: Record<string, string | null> = removeUndefValuesFromObject({
    '--fill': pr.fill || null,
    width: pr.width || '100%',
    height: pr.height || '100%',
    padding: pr.padding || '0',
    margin: pr.margin || 'unset',
    transform: !pr.rotate ? null : `rotate(${pr.rotate || 0}deg)`,
    filter: !pr.disabled ? null : 'grayscale(1)',
    '--outlinecolour': pr.outline || null,
  });

  return (
    <IconF
      {...pr}
      className={className}
      onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
        !disabled && onClick?.(e)
      }
      style={style}
      data-chnd={CHND}
      data-hasoutline={pr.outline}
      data-hasfill={!!pr.fill}
    >
      {children}
    </IconF>
  );
};
