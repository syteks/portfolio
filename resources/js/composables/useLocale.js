import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LOCALES, STORAGE_KEY } from '@/i18n';

/**
 * Thin wrapper over vue-i18n's global locale that adds persistence and keeps
 * <html lang> in sync. Drives the language toggle in the editor status line.
 */
export function useLocale() {
  const { locale } = useI18n({ useScope: 'global' });

  const setLocale = (next) => {
    if (!SUPPORTED_LOCALES.includes(next)) return;
    locale.value = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore persistence failures */
    }
    if (typeof document !== 'undefined') document.documentElement.lang = next;
  };

  return {
    locale,
    isFrench: computed(() => locale.value === 'fr'),
    setLocale,
    toggleLocale: () => setLocale(locale.value === 'en' ? 'fr' : 'en'),
  };
}
