import React from "react";

import styles from "../styles/BookDetails-styles";
import Authors from "./Authors";
import Rating from "./Rating";

const BookDetails = (props) => {
  const {authorName} = props;
  return (
    <div style={styles.root}>
      <Rating />
      <Authors authorName={authorName}/>
    </div>
  )
}

export default BookDetails;