import config, {bookCover} from "./config-styles";

const root = {
  display: "grid",
  gridTemplateColumns: `${bookCover.width} 1fr`,
  height: 255,
  borderRadius: 8,
  boxShadow: "3px 3px 5px 1px rgba(35,47,62,0.60)"
}

export default {
  narrow:{
    ...root
  },
  normal:{
    ...root,
    backgroundColor: "lightBlue"
  },
  // selected:{
  //   gridColumn: "span 2",
  //   // add row below for by the same author section?
  //   // height: "115%",
  // },
  wide :{
    ...root,
    backgroundColor: "lightCoral"
  }
}