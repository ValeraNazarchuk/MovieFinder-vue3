import { createI18n } from "vue-i18n";
import uk from "./uk/uk.json";

const currentLang = localStorage.getItem("i18lang");

export const useI18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: currentLang || "uk",
  fallbackLocale: "uk",
  messages: {
    uk: uk,
  },
});

export const changeLangHandler = (lang) => {
  localStorage.setItem("i18lang", lang);
  useI18n.global.locale.value = lang;
};
