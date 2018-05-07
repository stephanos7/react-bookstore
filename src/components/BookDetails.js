import React from "react";

import styles from "../styles/BookDetails-styles";
import Authors from "./Authors";
import Rating from "./Rating";

const BookDetails = () => {
  return (
    <div style={styles.root}>
      <Rating />
      <Authors />
    </div>
  )
}

export default BookDetails;