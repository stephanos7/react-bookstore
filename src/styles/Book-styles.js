import config from "./config-styles";

const root = {
  display: "grid",
  gridTemplateColumns: `${config.bookCover.width} 1fr`,
  height: 255,
  borderRadius: 8,
  boxShadow: "3px 3px 5px 1px rgba(35,47,62,0.60)"
}

export default {
  normal:{
    ...root
  },
  selected:{
    gridColumn: "span 2",
    ...root
  },
  collapsed:{
    ...root,
    width:config.bookCover.width
  }
}