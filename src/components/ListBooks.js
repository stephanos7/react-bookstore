import React from "react";

import Book from "./Book";
import listStyles from "../styles/ListBooks-styles";
import bookStyles from "../styles/Book-styles";

class ListBooks extends React.Component {
  selectBook = () => console.log("parent was selected :");


  grid = React.createRef();

  showRef = () => {
    console.log(this.grid.current) 
    const gridDOMnodeComputedSyle = window.getComputedStyle(this.grid.current).getPropertyValue("grid-template-columns");
    console.log(gridDOMnodeComputedSyle)
  }

  render(){
    const {books} = this.props;
    const dynamicStyle = books.selected ? bookStyles.selected : bookStyles.normal;

    return (
      <div style={listStyles.root} ref={this.grid}>
        {books.map( (book, i) => (
          <div style={dynamicStyle} key={i} onClick={() => this.showRef()}>
            <Book book={book}/>
          </div>))}
      </div>
    )
  }
}

export default ListBooks;