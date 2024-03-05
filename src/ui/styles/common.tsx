'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { CSSProperties } from 'react';

import { colours } from './colours';

/** function that returns css that gives a text outline drop shadow.
 * @param outlineColour default='white'
 * @param sizePx default = 1px
 */
export const HardOutline = (outlineColour = 'white', sizePx = 1) => css`\
filter: ${HardOutlineFilter(outlineColour, sizePx)};
`;

export const HardOutlineFilter = (outlineColour = 'white', sizePx = 1) => {
  const px = `${sizePx}px`;

  return `drop-shadow(${px} ${px} 0px ${outlineColour})
  drop-shadow(-${px} ${px} 0px ${outlineColour})
  drop-shadow(${px} -${px} 0px ${outlineColour})
  drop-shadow(-${px} -${px} 0px ${outlineColour});`;
};

/** disable user text selection */
export const NoTextSelect = css`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

/** enable text overflow
 * @param lines number of lines before overflow
 */
export const TextOverflowEllipsis = (lines: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/** stop dragging of element */
export const noDrag: {
  draggable: boolean;
  onDragStart: React.DragEventHandler<HTMLDivElement>;
  onTouchStart: React.TouchEventHandler<HTMLDivElement>;
} = {
  draggable: false,
  onDragStart: (e) => {
    e.preventDefault();
    e.stopPropagation();
  },
  onTouchStart: (e) => {
    e.preventDefault();
    e.stopPropagation();
  },
};

/** apply bounce effect given a condition */
export const bounce = (bounceattr: string) => css`
  transition:
    opacity 0.2s ease,
    transform 0.2s cubic-bezier(0.02, 1.5, 0.74, 1.23);
  transform-origin: 50% 50%;
  transform: translateY(-5px);
  &[${bounceattr}='true'] {
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  background-color: white;
  margin: 0.5rem;

  position: relative;
  border-radius: 0.5rem;
  max-width: 40rem;
  padding: 1rem;
  border: solid 2px ${colours.lighter};
`;

export interface IVarStyles {
  /** default var(--main-fg) */
  color: string;
  /** default var(--main-bg) */
  backgroundColor: string;
  /** default var(--main-bg-mid) */
  borderColor: string;
}

export const getVarStyles = (
  raw?: Partial<IVarStyles & CSSProperties>,
): IVarStyles => ({
  ...raw,
  color: raw?.color ?? 'var(--main-fg)',
  backgroundColor: raw?.backgroundColor ?? 'var(--main-bg)',
  borderColor: raw?.borderColor ?? 'var(--main-bg-mid)',
});
