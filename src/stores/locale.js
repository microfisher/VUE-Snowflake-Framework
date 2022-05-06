import { defineStore } from 'pinia'
import { useI18n } from "vue-i18n";
import { LANGUAGE } from "@/cores/constant";

export const useLocale = defineStore('locale', {
  state: () => ({
    language: localStorage.getItem(LANGUAGE) || "enUS",
  }),
  actions: {
    setLanguage(state, lang) {
      const i18n = useI18n();
      this.language = lang;
      i18n.locale.value = lang;
      localStorage.setItem(LANGUAGE, lang);
    },
  },
  getters: {
    language: (state) => state.language,
   },
})