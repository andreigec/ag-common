'use client';
import styled from '@emotion/styled';
import type { CSSProperties } from 'react';
import React from 'react';

import { removeUndefValuesFromObject } from '../../../common/helpers/object';
import { HardOutline } from '../../styles/common';

export const IconF = styled.span`
  transition: all 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: inherit;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: unset;
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
    ${HardOutline('var(--outlinecolour)')}
  }

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  img {
    object-fit: contain;
  }
`;

export interface IIcon {
  disabled?: boolean;
  outline?: string;
  rotate?: number;
  canHover?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  children?: React.ReactNode;
  role?: string;
  title?: string;
  tabIndex?: number;
  className?: string;
  style?: {
    /** default 100% */
    width?: string;
    /** default 100% */
    height?: string;
    /** default 0 */
    padding?: string;
    /** default unset */
    margin?: string;
    /** pass fill down to svg */
    fill?: string;
  } & CSSProperties;
}

export const Icon = (pr: IIcon) => {
  const { className, children, disabled, onClick } = pr;
  const CHND = pr.canHover && !pr.disabled;
  const style: CSSProperties = removeUndefValuesFromObject({
    ...(pr?.style ?? {}),
    '--fill': pr.style?.fill ?? null,
    width: pr.style?.width,
    height: pr.style?.height,
    padding: pr.style?.padding,
    margin: pr.style?.margin,
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
      data-hasfill={!!pr.style?.fill}
      data-type="iconbox"
    >
      {children}
    </IconF>
  );
};
