import React from 'react';
import styled from 'styled-components';
import { TLang } from '../../..';
import { colours } from '../../styles/colours';
import { Button } from '../Button';
const Door = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M3 3h8V1H3a2 2 0 00-2 2v14a2 2 0 002 2h8v-2H3z" />
    <path d="M19 10l-6-5v4H5v2h8v4l6-5z" />
  </svg>
);

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
  lang,
  logout,
}: {
  lang: TLang;
  invert?: boolean;
  className?: string;
  logout: () => void;
}) => {
  return (
    <ButtonStyled
      invert={invert}
      className={className}
      onKeyPress={() => logout()}
      onClick={() => logout()}
      lang={lang}
    >
      <Icon>{Door}</Icon>
    </ButtonStyled>
  );
};
