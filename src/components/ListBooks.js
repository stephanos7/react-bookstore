import React from "react";

import Book from "./Book";
import styles from "../styles/ListBooks-styles";

class ListBooks extends React.Component {
  state = {
    books : null,
    start : null,
    end : null
  }
  
  render(){
    const {books} = this.props;
    return (
      <div style={styles.root}>
        {books.map( (book, i) => (
          <Book key={i} 
                book={book}
                selectBook={this.selectBook}/>
        ))}
      </div>
    )
  }
}

export default ListBooks;