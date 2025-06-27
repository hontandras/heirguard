import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: "en", name: "English",    flag: "🇬🇧" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "de", name: "Deutsch",    flag: "🇩🇪" },
  { code: "fr", name: "Français",   flag: "🇫🇷" },
  { code: "es", name: "Español",    flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ---------- külső kattintás figyelése ---------- */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  /* ---------- kattintás nyelvre ---------- */
  const chooseLang = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();          // <— kulcs: ne lássa "külső kattintásnak"
    console.log("Changing language to:", code);
    setLanguage(code);
    setOpen(false);
  };

  const curr = languages.find((l) => l.code === currentLanguage) || languages[0];

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block text-left z-[10000] pointer-events-auto"
    >
      {/* gomb a lenyitáshoz */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        className="inline-flex items-center px-3 py-2 bg-white/80 backdrop-blur-sm
                   border border-slate-300 rounded-lg shadow-sm text-sm font-medium
                   text-slate-700 hover:bg-white hover:border-slate-400 transition pointer-events-auto"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="mr-2">{curr.flag}</span>
        <span className="hidden sm:inline">{curr.name}</span>
        <svg
          className={`ml-2 h-4 w-4 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* lenyíló lista */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-slate-200
                     rounded-lg shadow-lg z-[10001] pointer-events-auto"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={(e) => chooseLang(lang.code, e)}
              className={`w-full flex items-center px-4 py-3 text-sm text-left
                          hover:bg-slate-100 transition-colors pointer-events-auto ${
                            lang.code === currentLanguage
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-slate-700"
                          }`}
            >
              <span className="mr-3 text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {lang.code === currentLanguage && (
                <svg
                  className="ml-auto h-4 w-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}