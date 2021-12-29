import styled, { css } from 'styled-components';
import { colours } from './colours';

export const DropShadow = (outline: string) => css`
  filter: drop-shadow(1px 1px 0px ${outline})
    drop-shadow(-1px 1px 0px ${outline}) drop-shadow(1px -1px 0px ${outline})
    drop-shadow(-1px -1px 0px ${outline});
`;

export const NoTextSelect = css`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
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
