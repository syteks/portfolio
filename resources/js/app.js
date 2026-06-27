import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import { i18n } from '@/i18n';
import { vReveal } from '@/composables/useScrollReveal';

// Reflect the initial locale on <html lang> for accessibility / SEO.
document.documentElement.lang = i18n.global.locale.value;

createApp(App)
  .use(i18n)
  .directive('reveal', vReveal)
  .mount('#app');
