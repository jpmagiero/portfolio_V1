
import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "../locales/en";
import { pt } from "../locales/pt";

type Language = "en" | "pt";

export type Translation = typeof en;

interface LanguageContextType {
  language: Language;
  t: Translation;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage if available
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage) return savedLanguage;
      
      // Try to detect browser language
      const browserLanguage = navigator.language.split("-")[0];
      return browserLanguage === "pt" ? "pt" : "en";
    }
    return "en";
  });
  
  // Get translations based on current language
  const t = language === "en" ? en : pt;

  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem("language", language);
    // Set html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "pt" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
