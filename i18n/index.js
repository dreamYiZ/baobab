import cn from "./cn";

let language;
let i18n = {
  cn,
};
const i18nWord = (word) => {
  const LanguageList = ["cn"];
  if (language && LanguageList.includes(language)) {
    console.log('i18n[language]', i18n[language])
    return i18n[language].get(word);
  }
  return word;
};

const setLanguage = (l) => {
  language = l;
};

export { i18nWord, setLanguage };
