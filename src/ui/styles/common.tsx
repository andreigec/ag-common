import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colours } from './colours';

/** function that returns css that gives a text outline drop shadow.
 * outlinecolour default='white'
 * size default = 1px
 */
export const HardOutline = (outlineColour = 'white', size = 1) => {
  const px = `${size}px`;

  return css`
    filter: drop-shadow(${px} ${px} 0px ${outlineColour})
      drop-shadow(-${px} ${px} 0px ${outlineColour})
      drop-shadow(${px} -${px} 0px ${outlineColour})
      drop-shadow(-${px} -${px} 0px ${outlineColour});
  `;
};

export const NoTextSelect = css`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

export const TextOverflowEllipsis = (lines: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CssTransparentBlock = css`
  background-color: rgba(150, 150, 150, 0.5);
  border-radius: 3px;
  font-weight: 600;
  color: ${colours.mainLight};
`;

export const FadeBottom = ({ height }: { height: string }) => css`
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${height};
    background: -webkit-linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    background-image: -moz-linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    background-image: -o-linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    background-image: -ms-linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
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

export const FullScreenPage = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-flow: column;
  overflow: hidden;
  align-content: flex-start;
  align-items: flex-start;
`;

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
