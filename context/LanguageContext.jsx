"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '@/public/locales/en.json';
import es from '@/public/locales/es.json';

const translations = {
  EN: en,
  ES: es,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState("EN");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("fractal_lang");
    if (storedLang && (storedLang === "EN" || storedLang === "ES")) {
      setLangState(storedLang);
    }
  }, []);

  const setLang = (newLang) => {
    setLangState(newLang);
    localStorage.setItem("fractal_lang", newLang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[lang];
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    // Fallback to EN if translation is missing in ES
    if (value === undefined && lang !== "EN") {
        let enValue = translations["EN"];
        for (const k of keys) {
            if (enValue === undefined) break;
            enValue = enValue[k];
        }
        return enValue || key;
    }
    return value || key;
  };

  // Optional: Add a simple hydration guard (if needed) but returning children works fine for now
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
