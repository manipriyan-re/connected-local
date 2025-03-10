"use client";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import en from "@/locales/en/translation.json";
import al from "@/locales/al/translation.json";

if(!i18n.isInitialized){
    const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") || "en":"en";


i18n.use(initReactI18next).init({
    resources:{
        en:{translation:en},
        al:{translation:al},
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation:{
            escapeValue:false
    },
});
};
export default i18n;