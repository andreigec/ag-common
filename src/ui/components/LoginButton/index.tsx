import React from 'react';
import styled from 'styled-components';
import { t, TLang, TResource } from '../../../common/helpers/i18n';
import { ButtonBase } from '../Button';
import { getstarted } from './text';

const Base = styled.a`
  ${ButtonBase}
`;

export const LoginButton = ({
  className,
  text = getstarted,
  invert,
  title,
  savePath = true,
  lang,
  loginPath,
}: {
  title?: TResource;
  invert?: boolean;
  text?: TResource;
  className?: string;
  savePath?: boolean;
  lang: TLang;
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
      lang={lang}
      title={!title ? undefined : t(title, lang)}
      data-invert={invert}
      data-disabled={false}
      className={className}
    >
      {text && t(text, lang)}
    </Base>
  );
};
