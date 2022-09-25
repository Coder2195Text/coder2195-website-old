import { Dispatch, SetStateAction } from "react";
import { LANGUAGES } from "../translations/translation";

export interface Page {
    language: LANGUAGES;
    setLanguage: Dispatch<SetStateAction<LANGUAGES>>;
}

