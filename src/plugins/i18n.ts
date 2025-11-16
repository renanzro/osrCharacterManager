import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import ptBR from '../locales/pt-BR.json';
import { LOCALE_STORAGE_KEY } from '../constants/storage';

export const DEFAULT_LOCALE = 'en';

function readSavedLocale(): string {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const v = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (v) return v;
    }
  } catch (e) {
    // ignore
  }
  return DEFAULT_LOCALE;
}

export const i18n = createI18n({
  legacy: false,
  locale: readSavedLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    'pt-BR': ptBR
  }
});

export default i18n;
