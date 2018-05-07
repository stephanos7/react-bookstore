import React from "react";

import styles from "../styles/Cover-styles";

const Cover = (props) => {
  const {imageURL} = props;
  return (
    <div style={{...styles.root,background:`url(${imageURL})`,backgroundSize: "100%"}}>
    </div>
  )
}

export default Cover;