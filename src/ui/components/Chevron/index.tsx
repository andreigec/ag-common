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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1792 1792">
    <path d="M1679.339 301.56q0 53-37 90l-651 651q-38 38-91 38-54 0-90-38l-651-651q-38-36-38-90 0-53 38-91l74-75q39-37 91-37 53 0 90 37l486 486 486-486q37-37 90-37 52 0 91 37l75 75q37 39 37 91z" />
  </svg>
);

export const Chevron = ({
  down,
  width = '1.2rem',
  className,
  colour = 'black',
  onToggle,
}: {
  colour?: string;
  className?: string;
  width?: string;
  down: boolean;
  onToggle?: () => void;
}) => (
  <SChevron
    className={className}
    onClick={() => onToggle?.()}
    onTouchStart={() => onToggle?.()}
    onKeyPress={(e) => e.key === 'Enter' && onToggle?.()}
  >
    <IconStyled flip={down} fill={colour} width={width} height={width}>
      {ChevronIcon}
    </IconStyled>
  </SChevron>
);
