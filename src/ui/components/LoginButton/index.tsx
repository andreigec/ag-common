import { ButtonBase } from '../Button';
import React from 'react';
import styled from 'styled-components';

const Base = styled.a`
  ${ButtonBase}
`;

export const LoginButton = ({
  className,
  text,
  invert,
  savePath,
  loginPath,
  style,
}: {
  invert?: boolean;
  text: string;
  className?: string;
  /**
   * pass in request.url.path to save redirect. undefined will not set redirect
   */
  savePath: string | undefined;
  loginPath: (state?: Record<string, unknown> | undefined) => string;
  style?: Record<string, string | number | boolean>;
}) => {
  const state = !savePath
    ? undefined
    : {
        redirect: savePath,
      };

  const lp = loginPath(state);

  return (
    <Base
      style={style}
      href={lp}
      title={text}
      data-invert={invert}
      data-disabled={false}
      className={className}
    >
      {text}
    </Base>
  );
};
