"use client";

import { createContext, useContext, useState, useCallback, useMemo, useEffect, ReactNode } from "react";
import { Lang, translations } from "./translations";

type TranslationSet = (typeof translations)["en"] | (typeof translations)["ar"];

type LanguageContextType = {
  lang: Lang;
  t: TranslationSet;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("alnoor-lang");
    if (saved === "ar" || saved === "en") setLang(saved);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === "en" ? "ar" : "en";
      localStorage.setItem("alnoor-lang", next);
      return next;
    });
  }, []);

  const t = translations[lang];
  const value = useMemo(() => ({ lang, t, toggleLang }), [lang, t, toggleLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
