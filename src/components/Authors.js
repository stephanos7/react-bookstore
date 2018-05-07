import React from "react";

import styles from "../styles/Authors-styles";

const Authors = (props) => {
  const {authorName} = props;
  return (
    <div style={styles.root}>
      <h4>Authors</h4>
      <p>{authorName}</p>
    </div>
  )
}

export default Authors;