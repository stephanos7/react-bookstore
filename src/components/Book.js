import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";

const Book = () => {
  return (
    <div style={styles.root}>
      <Cover />
    </div>
  )
}

export default Book;