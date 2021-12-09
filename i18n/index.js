import * as cn from "./cn";

let language;
let i18n = {
    cn
}
const i18nWord = (word)=>{
    const LanguageList  = ['cn']
    if( language && LanguageList.includes( language)){
        return i18n[language].get(word)
    }
    return word
}

export { i18nWord, language }