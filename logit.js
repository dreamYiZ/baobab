
const log = (...x)=>{
    console.log(...x)
}
export default {
    install: (app, options) => {
      // Plugin code goes here  
      log('install', 'app')
      
    }
  }