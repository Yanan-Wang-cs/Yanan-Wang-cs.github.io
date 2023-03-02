import { createI18n } from "vue-i18n";
import en from "./en";
import zh from "./zh";

const i18n = createI18n({
  locale: "en",
  messages: {
    en,
    zh,
  },
  legacy: false,
});

export default i18n;
