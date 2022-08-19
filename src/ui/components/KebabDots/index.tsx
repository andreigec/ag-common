import { Icon } from '../Icon';
import React from 'react';
import styled from 'styled-components';
import { HorizontalDots } from '../../icons/HorizontalDots';
const IconStyled = styled(Icon)`
  position: absolute;
`;

export interface IKebabDots {
  onClick?: () => Promise<void>;
}
export const KebabDots = ({ onClick }: IKebabDots) => (
  <IconStyled width="2rem" height="2rem" onClick={() => onClick?.()}>
    {HorizontalDots}
  </IconStyled>
);
