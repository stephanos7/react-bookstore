import config from "./config-styles";

const root = {
  display: "grid",
  justifyContent: "space-around",
  backgroundColor: config.colors.lightGrey,
  padding: "50px 0"
}

export default {
  narrow:{
    ...root,
    gridTemplateColumns: "repeat(auto-fit, 175px)",
    gridGap: 30
  },
  normal:{
    ...root,
    gridTemplateColumns: "repeat(auto-fit, 320px)",
    gridGap: 45
  }
}