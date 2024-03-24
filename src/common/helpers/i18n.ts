type TLangExceptEn = 'id' | 'vi' | 'pt';
export type TLang = TLangExceptEn | 'en';
export const AllLang: TLang[] = ['en', 'id', 'vi', 'pt'];
/**
 * null = wont translate. undefined = fallback to eng
 */
export type TResource = {
  [k in TLangExceptEn]?: string | null;
} & { en: string };

export const getValidatedLang = (raw: string): TLang => {
  const f = AllLang.find((l) => l === raw) as TLang;
  if (!f) {
    return 'en';
  }
  return f;
};

export const t = (res: TResource, lang: TLang): string => {
  if (res[lang] === null) {
    return '';
  }
  return res[lang] ?? res.en;
};

export const useTranslation = <T extends { [a: string]: TResource }>(
  texts: T,
  lang: TLang,
) => {
  const ret = (lineText: keyof T): string => {
    const v1 = texts[lineText][lang];
    if (v1 || v1 === null) {
      return v1 ?? '';
    }

    return texts[lineText].en ?? '???';
  };

  return ret;
};
