import config from "./config-styles";

export default {
  root:{
    display: "grid",
    gridGap: 45,
    gridTemplateColumns: "repeat(auto-fit, 320px)",
    justifyContent: "space-around",
    backgroundColor: config.colors.lightGrey,
    padding: "50px 0"
  }
}