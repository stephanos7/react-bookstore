import React from "react";

import Book from "./Book";
import styles from "../styles/ListBooks-styles";

const ListBooks = (props) => {
  const {books} = props;
  return (
    <div style={styles.root}>
      {books.map( book => (
        <Book book={book}/>
      ))}
    </div>
  )
}

export default ListBooks;