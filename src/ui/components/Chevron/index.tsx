import { Icon } from '../Icon';
import styled from 'styled-components';
import React from 'react';

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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
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
