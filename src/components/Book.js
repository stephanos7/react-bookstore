import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import BookDetails from "./BookDetails";

const Book = () => {
  return (
    <div style={styles.root}>
      <Cover />
      <BookDetails />
    </div>
  )
}

export default Book;