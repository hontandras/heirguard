import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { translations, Translation } from "../translations";

// --------- típusok ---------
interface LangCtx {
  currentLanguage: string;
  t: (k: keyof Translation) => string;
  setLanguage: (code: string) => void;
  detectedCountry?: string;
}

// --------- kontextus ---------
const LanguageContext = createContext<LangCtx | undefined>(undefined);

// --------- provider ---------
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // böngészőtől vagy localStorage‑tól indulunk
  const browserLang = navigator.language.split("-")[0];
  const saved = localStorage.getItem("language");
  const startLang = saved ?? (["en", "nl", "de", "fr", "es"].includes(browserLang) ? browserLang : "en");

  const [currentLanguage, setCurrentLanguage] = useState<string>(startLang);
  const [detectedCountry, setDetectedCountry] = useState<string>();

  // Detect country from browser language
  useEffect(() => {
    const fullLang = navigator.language;
    const countryCode = fullLang.split("-")[1];
    
    if (countryCode) {
      const countryMap: Record<string, string> = {
        'NL': 'Netherlands',
        'DE': 'Germany', 
        'FR': 'France',
        'ES': 'Spain',
        'GB': 'United Kingdom',
        'US': 'United States'
      };
      
      if (countryMap[countryCode]) {
        setDetectedCountry(countryMap[countryCode]);
      }
    }
  }, []);

  // frissítés + tárolás + <html lang="">
  const setLanguage = (code: string) => {
    console.log("LanguageContext: Setting language to:", code);
    setCurrentLanguage(code);
    localStorage.setItem("language", code);
    document.documentElement.lang = code;
  };

  const t = (key: keyof Translation) =>
    translations[currentLanguage]?.[key] || translations["en"][key] || key;

  // első renderkor állítsd be a <html lang="">‑et
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, detectedCountry }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --------- fogyasztó (hook) ---------
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};