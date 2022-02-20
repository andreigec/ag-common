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
  savePath = true,
  loginPath,
  style,
}: {
  invert?: boolean;
  text: string;
  className?: string;
  savePath?: boolean;
  loginPath: (state?: Record<string, unknown> | undefined) => string;
  style?: Record<string, string | number | boolean>;
}) => {
  const lp = loginPath(
    !savePath || typeof window === 'undefined'
      ? undefined
      : {
          redirect: window.location.href.substring(
            window.location.origin.length,
          ),
        },
  );

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
