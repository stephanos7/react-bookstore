import React from "react";

import Book from "./Book";
import listStyles from "../styles/ListBooks-styles";
import bookStyles from "../styles/Book-styles";

class ListBooks extends React.Component {

  selectBook = () => console.log("parent was selected :")
  
  render(){
    const {books} = this.props;
    const dynamicStyle = books.selected ? bookStyles.selected : bookStyles.normal;

    return (
      <div style={listStyles.root}>
        {books.map( (book, i) => (
          <div style={dynamicStyle} key={i} onClick={() => this.selectBook()}>
            <Book book={book}/>
          </div>))}
      </div>
    )
  }
}

export default ListBooks;