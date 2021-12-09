import { i18nWord, setLanguage } from "./i18n";

const log = (...x) => {
  console.log(...x);
};



export default {
  install: (app, options) => {
    // Plugin code goes here
    options.language && setLanguage(options.language);


    log(i18nWord('render'), "app");
  },
};
