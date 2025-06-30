import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Translation, loadTranslations } from "../translations";

// --------- types ---------
interface LangCtx {
  currentLanguage: string;
  t: (k: keyof Translation) => string;
  setLanguage: (code: string) => void;
  detectedCountry?: string;
}

// --------- context ---------
const LanguageContext = createContext<LangCtx | undefined>(undefined);

// --------- provider ---------
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Get initial language from browser or localStorage
  const browserLang = navigator.language.split("-")[0];
  const saved = localStorage.getItem("language");
  const startLang = saved ?? (["en", "nl", "de", "fr", "es"].includes(browserLang) ? browserLang : "en");

  const [currentLanguage, setCurrentLanguage] = useState<string>(startLang);
  const [translations, setTranslations] = useState<Translation | null>(null);
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

  // Load translations when language changes
  useEffect(() => {
    const loadLanguageTranslations = async () => {
      try {
        const translation = await loadTranslations(currentLanguage);
        setTranslations(translation);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to English if loading fails
        if (currentLanguage !== 'en') {
          const fallbackTranslation = await loadTranslations('en');
          setTranslations(fallbackTranslation);
        }
      }
    };

    loadLanguageTranslations();
  }, [currentLanguage]);

  // Update language and save to localStorage
  const setLanguage = (code: string) => {
    console.log("LanguageContext: Setting language to:", code);
    setCurrentLanguage(code);
    localStorage.setItem("language", code);
    document.documentElement.lang = code;
  };

  // Translation function
  const t = (key: keyof Translation): string => {
    if (!translations) {
      return key; // Return key as fallback while loading
    }
    return translations[key] || key;
  };

  // Set initial HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, detectedCountry }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --------- hook ---------
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};