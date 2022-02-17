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
}: {
  invert?: boolean;
  text: string;
  className?: string;
  savePath?: boolean;
  loginPath: (state?: Record<string, unknown> | undefined) => string;
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
