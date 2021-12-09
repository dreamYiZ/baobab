import cn from "./cn";
import en from "./en";

let language;
let i18n = {
  cn,
  en
};

const i18nWord = (word) => {
  const LanguageList = ["cn"];
  if (language && LanguageList.includes(language)) {
    return i18n[language].get(word);
  }
  return i18n['en'].get(word);
};

const setLanguage = (l) => {
  language = l;
};

export { i18nWord, setLanguage };
