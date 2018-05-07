import React from "react";

import styles from "../styles/BookDetails-styles";
import Authors from "./Authors";

const BookDetails = () => {
  return (
    <div style={styles.root}>
      <Authors />
    </div>
  )
}

export default BookDetails;