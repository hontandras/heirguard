/* src/translations/index.ts */
import en from './en.json';
import nl from './nl.json';
import de from './de.json';
import fr from './fr.json';
import es from './es.json';

export type LangCode = 'en' | 'nl' | 'de' | 'fr' | 'es';

// Define Translation type based on the structure of translation files
export type Translation = typeof en;

export const translations: Record<LangCode, Translation> = {
  en, nl, de, fr, es
};

export function getTranslation(
  key: string,
  lang: LangCode = 'en'
): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

// Export loadTranslations function that was expected by LanguageContext
export async function loadTranslations(langCode: string): Promise<Translation> {
  const validLangCode = ['en', 'nl', 'de', 'fr', 'es'].includes(langCode) 
    ? langCode as LangCode 
    : 'en';
  
  return translations[validLangCode];
}