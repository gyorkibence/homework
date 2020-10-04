import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import hu from './hu';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: { en, hu },
    react: {
      wait: true,
    },
  });

export default i18next;
