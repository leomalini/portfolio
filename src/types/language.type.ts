export type Language = 'pt' | 'en';

export interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}