import { createI18n } from 'vue-i18n';
import daLocale from '@/locales/da.json'; 
import enLocale from '@/locales/en.json'; 

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en', 
  messages: {
    en: enLocale,
    da: daLocale,
  },
});

export default i18n;
