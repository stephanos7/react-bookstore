import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import BookDetails from "./BookDetails";

const Book = (props) => {
  const {coverImage, authorName, selected} = props.book;
  const propsStyle = selected ? styles.selected : styles.normal;

  return(
      <div style={propsStyle}>
        <Cover imageURL={coverImage} />
        <BookDetails authorName={authorName} />
      </div>
    )
}

export default Book;