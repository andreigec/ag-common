import React from 'react';
import { TLang, TResource } from '../../common/helpers/i18n';
export const useTranslation = <T extends { [a: string]: TResource }>(
  texts: T,
  lang: TLang,
) => {
  const ret = (lineText: keyof T) => {
    let v1 = texts[lineText]?.[lang];
    const missing = v1 === undefined;
    if (missing) {
      v1 = texts[lineText].en;
    }

    if (missing) {
      return <div style={{ backgroundColor: 'rgb(255,230,230)' }}>{v1}</div>;
    }
    return v1;
  };

  return ret;
};
