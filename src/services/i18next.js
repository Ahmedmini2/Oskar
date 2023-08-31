import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translation/en/global.json";
import ar from "../translation/ar/global.json";

export const languageResources ={
    en: {
        translation: en
    },
    ar: {
        translation: ar
    }
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: "en",
    fallbackLng: "en",
    resources: languageResources,
})

export default i18next;