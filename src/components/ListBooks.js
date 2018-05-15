import React from "react";

import Book from "./Book";
import styles from "../styles/ListBooks-styles";

class ListBooks extends React.Component {
  render(){
    const {books} = this.props;
    return (
      <div style={styles.root}>
        {books.map( book => (
          <Book key={book.id} 
                book={book}
                selectBook={this.selectBook}/>
        ))}
      </div>
    )
  }
}

export default ListBooks;