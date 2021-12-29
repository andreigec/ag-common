import React from 'react';
import { t, TLang, TResource } from '../../../common/helpers/i18n';
import { Button } from '../Button';
import { getstarted } from './text';

export const LoginButton = ({
  className,
  text = getstarted,
  invert,
  title,
  savePath = true,
  lang,
  pushPath,
  loginPath,
}: {
  title?: TResource;
  invert?: boolean;
  text?: TResource;
  className?: string;
  savePath?: boolean;
  lang: TLang;
  pushPath: (p: string) => void;
  loginPath: (state?: Record<string, unknown> | undefined) => string;
}) => {
  const lp = loginPath(
    !savePath || typeof window === 'undefined'
      ? undefined
      : {
          redirect: window.location.href.substr(window.location.origin.length),
        },
  );

  return (
    <Button
      lang={lang}
      title={title}
      invert={invert}
      className={className}
      onKeyPress={async () => {
        await pushPath(lp);
      }}
      onClick={async () => {
        await pushPath(lp);
      }}
    >
      {text && t(text, lang)}
    </Button>
  );
};
