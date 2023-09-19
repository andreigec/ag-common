'use client';
import styled from '@emotion/styled';
import React from 'react';

import { HorizontalDots } from '../../icons/HorizontalDots';
import { Icon } from '../Icon';

const IconStyled = styled(Icon)`
  position: absolute;
`;

export interface IKebabDots {
  onClick?: () => Promise<void>;
}
export const KebabDots = ({ onClick }: IKebabDots) => (
  <IconStyled
    width="2rem"
    height="2rem"
    onClick={() => onClick?.()}
    data-icon="kebab"
  >
    {HorizontalDots}
  </IconStyled>
);
