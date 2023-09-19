'use client';
import styled from '@emotion/styled';
import React from 'react';

import { ChevronRight } from '../../icons/ChevronRight';
import { Icon } from '../Icon';

const Base = styled.span`
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
export interface IChevron {
  /**
   * default right
   */
  point: 'up' | 'down' | 'left' | 'right';
  colour?: string;
  className?: string;
  width?: string;
  onToggle?: () => void;
}

export const Chevron = ({
  width = '1.2rem',
  className,
  colour = 'black',
  onToggle,
  point = 'right',
}: IChevron) => {
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
    <Base
      className={className}
      onClick={() => onToggle?.()}
      onTouchStart={() => onToggle?.()}
      onKeyDown={(e) => e.key === 'Enter' && onToggle?.()}
    >
      <IconStyled rotate={rotate} fill={colour} width={width} height={width}>
        {ChevronRight}
      </IconStyled>
    </Base>
  );
};
