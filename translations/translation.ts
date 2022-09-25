import English from "./json/en.json"

enum LANGUAGES {
    ENGLISH = 'en'
}

const TRANSLATIONS : Record<LANGUAGES, typeof English> = {
    'en': English
}

export default TRANSLATIONS
export {LANGUAGES}