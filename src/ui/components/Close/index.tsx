import { filterDataProps } from '../../helpers/dom';
import styled from 'styled-components';
import React from 'react';

const Base = styled.div`
  position: absolute;
  z-index: 1;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  background-color: white;
  top: 0;
  right: 0;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
export interface IClose {
  onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}
export const Close = (p: IClose) => {
  return (
    <Base
      {...filterDataProps(p)}
      className={p.className}
      onClick={(e) => p.onClick?.(e)}
    />
  );
};
