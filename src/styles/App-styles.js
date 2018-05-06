import config, { resetConfig } from "./config-styles";


export default {
  "*": {

  },
  html: {
    ...resetConfig,
    fontFamily : config.mainFont,
    fontSize: 24
  },  
  // TODO:
  // use immutable.js to spread a nested object onto the app-styles export
  body: {...resetConfig},
  div:{...resetConfig},
  span: {...resetConfig},
  h1:{...resetConfig},
  h2:{...resetConfig}, 
  h3:{...resetConfig}, 
  h4:{...resetConfig}, 
  p:{...resetConfig}, 
  ul:{...resetConfig}, 
  li:{...resetConfig},
}