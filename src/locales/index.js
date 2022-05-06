import { createI18n } from "vue-i18n";
import enUS from "./langs/enUS"
import zhCN from "./langs/zhCN"

const i18n = createI18n({
   legacy: false,
   globalInjection: true,
   locale:"enUS",
   messages:{
    enUS,
    zhCN
  },
 });

export default i18n