import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        name: "Denys Muzyka",
        info: "Promoter of sports, healthy lifestyle and self-development",
        order: "Sign up for training",
        tiktok: "TikTok",
        instagram: "Instagram",
        telegram: "Telegram",
        download: "Download Weight Loss Guide",
        aboutMe: "About Me",
        pricing: "Pricing",
        courses: "Courses",
      },
    },
    uk: {
      translation: {
        name: "Денис Музика",
        info: "Пропагандист спорту, здорового способу життя та саморозвитку.",
        order: "Записатись на тренування",
        tiktok: "TikTok",
        telegram: "Telegram",
        instagram: "Instagram",
        download: "Завантажити гайд зі схуднення",
        aboutMe: "Інформація про мене",
        pricing: "Ціни",
        courses: "Курси",
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
