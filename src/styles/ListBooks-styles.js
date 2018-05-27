import config from "./config-styles";

const root = {
  display: "grid",
  justifyContent: "space-between",
  backgroundColor: config.colors.lightGrey,
  padding: "50px 0"
}

export default {
  narrow:{
    ...root,
    gridTemplateColumns: `repeat(auto-fit, ${config.layouts.narrowCardSize})`,
    gridGap: 30
  },
  normal:{
    ...root,
    gridTemplateColumns: `repeat(auto-fit, ${config.layouts.normalCardSize})`,
    gridGap: 45
  },
  wide:{
    ...root,
    gridTemplateColumns: `repeat(auto-fit, ${config.layouts.wideCardSize})`,
    gridGap: 10
  }
}