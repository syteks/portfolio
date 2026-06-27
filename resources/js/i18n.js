import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import fr from '@/locales/fr.json';

/**
 * vue-i18n setup (Composition API). Translation catalogs live in
 * resources/js/locales/*.json — Laravel-style message files, one per locale.
 * Only English and French are supported.
 */
export const SUPPORTED_LOCALES = ['en', 'fr'];
export const STORAGE_KEY = 'locale';

export const detectLocale = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LOCALES.includes(saved)) return saved;
  } catch {
    /* localStorage unavailable — fall through to navigator */
  }
  const nav = (typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en')
    .slice(0, 2)
    .toLowerCase();
  return SUPPORTED_LOCALES.includes(nav) ? nav : 'en';
};

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, fr },
});
