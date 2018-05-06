import config from "./config-styles";

export default {
  root:{
    display: "grid",
    gridGap: 20,
    gridTemplateColumns: "repeat(auto-fill, 175px)",
    backgroundColor: config.colors.lightGrey,
    padding: "50px 0"
  }
}