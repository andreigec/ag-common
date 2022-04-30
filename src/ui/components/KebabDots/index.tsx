import { Icon } from '../Icon';
import React from 'react';
import styled from 'styled-components';
const Dots = (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M16 12a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0117 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0110 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 013 12z" />
  </svg>
);

const IconStyled = styled(Icon)`
  position: absolute;
`;

export const KebabDots = ({ onClick }: { onClick?: () => Promise<void> }) => (
  <IconStyled width="2rem" height="2rem" onClick={() => onClick?.()}>
    {Dots}
  </IconStyled>
);
