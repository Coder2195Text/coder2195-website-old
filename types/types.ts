import { Dispatch, SetStateAction } from "react";
import { LANGUAGES } from "../translations/translation";

export interface LanguageProps {
    language: LANGUAGES;
    setLanguage: Dispatch<SetStateAction<LANGUAGES>>;
}

