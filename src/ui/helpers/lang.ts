import { TLang, TResource } from '../../common/helpers/i18n';
export const useTranslation = <T extends { [a: string]: TResource }>(
  texts: T,
  lang: TLang,
) => {
  const ret = (lineText: keyof T): string => {
    let v1 = texts[lineText]?.[lang];
    const missing = v1 === undefined;
    if (missing) {
      v1 = texts[lineText].en;
    }

    if (missing) {
      return '???';
    }

    if (v1 === undefined || v1 === null) {
      return '???';
    }
    return v1;
  };

  return ret;
};
