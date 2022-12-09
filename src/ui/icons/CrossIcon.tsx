import styled from '@emotion/styled';
import React from 'react';

const Base = styled.svg`
  color: rgb(170, 170, 170);
  margin: auto;
  font-size: 2rem;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  transition: color 0.2s ease-out 0s;
  &:hover {
    color: rgb(136, 136, 136);
  }
`;
export const CrossIcon = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => (
  <Base
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 352 512"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
  </Base>
);
