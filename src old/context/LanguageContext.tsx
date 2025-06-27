import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Translation } from "../translations";

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: keyof Translation) => string;
  detectedCountry: string;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "en",
  setLanguage: () => {},
  t: (key) => translations["en"][key] || key,
  detectedCountry: "",
});

// IP-based country detection (simplified for demo)
const detectCountryFromBrowser = (): { language: string; country: string } => {
  const browserLang = navigator.language.toLowerCase();
  
  // Map browser languages to our supported languages and countries
  const langMap: Record<string, { lang: string; country: string }> = {
    'nl': { lang: 'nl', country: 'Netherlands' },
    'nl-nl': { lang: 'nl', country: 'Netherlands' },
    'de': { lang: 'de', country: 'Germany' },
    'de-de': { lang: 'de', country: 'Germany' },
    'fr': { lang: 'fr', country: 'France' },
    'fr-fr': { lang: 'fr', country: 'France' },
    'es': { lang: 'es', country: 'Spain' },
    'es-es': { lang: 'es', country: 'Spain' },
    'en-gb': { lang: 'en', country: 'United Kingdom' },
    'en-us': { lang: 'en', country: 'United States' },
  };

  // Check exact match first
  if (langMap[browserLang]) {
    return langMap[browserLang];
  }

  // Check language prefix
  const langPrefix = browserLang.split('-')[0];
  if (langMap[langPrefix]) {
    return langMap[langPrefix];
  }

  // Default to English/US
  return { lang: 'en', country: 'United States' };
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [detectedCountry, setDetectedCountry] = useState("");

  useEffect(() => {
    // Check localStorage first
    const storedLang = localStorage.getItem("heirguard-language");
    const storedCountry = localStorage.getItem("heirguard-country");
    
    if (storedLang && translations[storedLang]) {
      setCurrentLanguage(storedLang);
      if (storedCountry) {
        setDetectedCountry(storedCountry);
      }
    } else {
      // Detect from browser/IP
      const detected = detectCountryFromBrowser();
      
      if (translations[detected.lang]) {
        setCurrentLanguage(detected.lang);
        setDetectedCountry(detected.country);
        localStorage.setItem("heirguard-language", detected.lang);
        localStorage.setItem("heirguard-country", detected.country);
      }
    }
  }, []);

  const setLanguage = (lang: string) => {
    console.log('LanguageContext: Setting language to:', lang);
    if (translations[lang]) {
      setCurrentLanguage(lang);
      localStorage.setItem("heirguard-language", lang);
      
      // Update country based on language if not already set
      if (!detectedCountry) {
        const countryMap: Record<string, string> = {
          'nl': 'Netherlands',
          'de': 'Germany',
          'fr': 'France',
          'es': 'Spain',
          'en': 'United Kingdom'
        };
        
        const country = countryMap[lang] || 'United States';
        setDetectedCountry(country);
        localStorage.setItem("heirguard-country", country);
      }
    }
  };

  const t = (key: keyof Translation): string => {
    const translation = translations[currentLanguage]?.[key] || translations["en"][key] || key;
    return translation;
  };

  console.log('LanguageContext: Current language is:', currentLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, detectedCountry }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};