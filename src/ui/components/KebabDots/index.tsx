import { Icon } from '../Icon';
import React from 'react';
import styled from 'styled-components';
import { HorizontalDots } from '../../icons/HorizontalDots';
const IconStyled = styled(Icon)`
  position: absolute;
`;

export const KebabDots = ({ onClick }: { onClick?: () => Promise<void> }) => (
  <IconStyled width="2rem" height="2rem" onClick={() => onClick?.()}>
    {HorizontalDots}
  </IconStyled>
);
