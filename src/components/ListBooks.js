import React from "react";

import Book from "./Book";
import styles from "../styles/ListBooks-styles";

class ListBooks extends React.Component {
  // consider adding shelve components to control children behaviour on a per row basis

  selectBook = () => console.log("parent was selected :")
  
  render(){
    const {books} = this.props;
    return (
      <div style={styles.root}>
        {books.map( (book, i) => (
          <div key={i} onClick={() => this.selectBook()}>
            <Book book={book}/>
          </div>))}
      </div>
    )
  }
}

export default ListBooks;