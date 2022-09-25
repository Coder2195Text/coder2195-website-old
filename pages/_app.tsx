import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import TRANSLATIONS, { LANGUAGES } from '../translations/translation';
import { LanguageProps } from '../types/types';

const LanguageContext = createContext<LanguageProps | null>(null);
const LanguageProvider = LanguageContext.Provider;

function useLanguage():LanguageProps{
  const language = useContext(LanguageContext); // Language | null
  if (!language) throw new Error("use of LanguageContext before initialization");
  
  return language; // Language
}

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH)
  useEffect(() => {
    let lang = localStorage.getItem("language");
    if (!lang) {
      const navLang = navigator.language.split("-")[0];
      if (Object.values(LANGUAGES).includes(navLang as LANGUAGES)) lang = navLang;
      else lang = "en"
    }
    setLanguage(lang as LANGUAGES);
  }, [])

  return <LanguageProvider value={{language: language, setLanguage: setLanguage}}>
    <Component {...pageProps} dir={TRANSLATIONS[language].flip ? "ltr" : "rtl"} />
  </LanguageProvider>
}

export { useLanguage }

export default MyApp
