import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import BookDetails from "./BookDetails";

const Book = (props) => {
  const {coverImage, authorName} = props.book;
  return (
    <div style={styles.root}>
      <Cover imageURL={coverImage}/>
      <BookDetails authorName={authorName} />
    </div>
  )
}

export default Book;