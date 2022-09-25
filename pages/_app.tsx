import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import {LANGUAGES} from '../translations/translation';

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH);
  useEffect(()=>{
    if (!localStorage.getItem("language")){
      localStorage.setItem("language", navigator.language.split("-")[0])
    }
    setLanguage(localStorage.getItem("language") as LANGUAGES);
  })
  return <Component {...pageProps} language={language} setLanguage={setLanguage} />
}

export default MyApp
