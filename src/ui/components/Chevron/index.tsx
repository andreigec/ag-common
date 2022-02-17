import styled from 'styled-components';
import React from 'react';
import { Icon } from '../Icon';

const SChevron = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconStyled = styled(Icon)`
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const ChevronIcon = (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.638-.322.988.988 0 0 1 .218-1.085l2.318-2.297-2.327-2.307Z"
      fill="inherit"
      className="_14TyY7wB85QoVU"
    />
  </svg>
);

export const Chevron = ({
  width = '1.2rem',
  className,
  colour = 'black',
  onToggle,
  point = 'right',
}: {
  /**
   * default right
   */
  point: 'up' | 'down' | 'left' | 'right';
  colour?: string;
  className?: string;
  width?: string;
  onToggle?: () => void;
}) => {
  let rotate = 0;
  switch (point) {
    case 'down': {
      rotate = 90;
      break;
    }

    case 'left': {
      rotate = 180;
      break;
    }

    case 'up': {
      rotate = 270;
      break;
    }

    case 'right': {
      rotate = 0;
    }
  }

  return (
    <SChevron
      className={className}
      onClick={() => onToggle?.()}
      onTouchStart={() => onToggle?.()}
      onKeyPress={(e) => e.key === 'Enter' && onToggle?.()}
    >
      <IconStyled rotate={rotate} fill={colour} width={width} height={width}>
        {ChevronIcon}
      </IconStyled>
    </SChevron>
  );
};
