import config from "./config-styles";

export default {
  root:{
    display: "grid",
    gridGap: 50,
    gridTemplateColumns: "repeat(5, 175px)",
    justifyContent: "space-around",
    backgroundColor: config.colors.lightGrey,
    padding: "50px 0"
  }
}