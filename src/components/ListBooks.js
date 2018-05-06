import React from "react";

import Book from "./Book";
import styles from "../styles/ListBooks-styles";

const ListBooks = () => {
  return (
    <div style={styles.root}>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  )
}

export default ListBooks;