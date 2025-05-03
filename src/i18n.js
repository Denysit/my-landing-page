import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        name: "Denys Muzyka",
        info: "Fitness enthusiast sharing unique sports content and weight loss guides.",
        tiktok: "TikTok",
        telegram: "Telegram",
        download: "Download Weight Loss Guide",
        darkTheme: "Dark Theme",
        lightTheme: "Light Theme",
      },
    },
    uk: {
      translation: {
        name: "Денис Музика",
        info: "Ентузіаст фітнесу, ділюся унікальним спортивним контентом та гайдами зі схуднення.",
        tiktok: "TikTok",
        telegram: "Telegram",
        download: "Завантажити гайд зі схуднення",
        darkTheme: "Темна тема",
        lightTheme: "Світла тема",
      },
    },
  },
  lng: "uk",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
