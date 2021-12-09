import {i18nWord} from "./i18n";

const log = (...x)=>{
    console.log(...x)
}
export default {
    install: (app, options) => {
      // Plugin code goes here  
      log(i18nWord(render), 'app')
      
    }
  }