import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import Authors from "./Authors";

const Book = () => {
  return (
    <div style={styles.root}>
      <Cover />
      <div style={{justifySelf: "center"}}>
        <Authors />
      </div>
    </div>
  )
}

export default Book;