type TLangExceptEn = 'id' | 'vi';
export type TLang = TLangExceptEn | 'en';
export const AllLang: TLang[] = ['en', 'id', 'vi'];
export type TResource = {
  [k in TLangExceptEn]: string | null;
} & { en: string };

export const getValidatedLang = (raw: string): TLang => {
  const f = AllLang.find((l) => l === raw) as TLang;
  if (!f) {
    return 'en';
  }
  return f;
};
export const t = (res: TResource, lang: TLang): string => res[lang] ?? res.en;
