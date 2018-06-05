import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import BookDetails from "./BookDetails";

const Book = (props) => {
  const {coverImage, authorName} = props.book;

  return(
      <div style={props.book.selected ? {backgroundColor : "blue"} : {backgroundColor : "yellow"}}>
        <Cover imageURL={coverImage} />
        <BookDetails authorName={authorName} />
      </div>
    )
}

export default Book;