import { colours } from '../../styles/colours';
import { Button } from '../Button';
import React from 'react';
import styled from 'styled-components';
import { Door } from '../../icons/Door';

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const ButtonStyled = styled(Button)`
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  svg {
    fill: ${colours.notificationBlue};
  }
`;

export const LogoutButton = ({
  className,
  invert,
  logout,
}: {
  invert?: boolean;
  className?: string;
  logout: () => void;
}) => (
  <ButtonStyled
    invert={invert}
    className={className}
    onKeyPress={() => logout()}
    onClick={() => logout()}
  >
    <Icon>{Door}</Icon>
  </ButtonStyled>
);
