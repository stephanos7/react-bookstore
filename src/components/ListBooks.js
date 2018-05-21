import React from "react";

import Book from "./Book";
import listStyles from "../styles/ListBooks-styles";
import bookStyles from "../styles/Book-styles";

class ListBooks extends React.Component {
  gridRef = React.createRef();

  selectBook = () => console.log("parent was selected :");

  getNumberOfGridColumns = () => {
    let gridColumnsComputedSyle = window.getComputedStyle(this.gridRef.current).getPropertyValue("grid-template-columns");
    let numberOfColumns = gridColumnsComputedSyle.split(" ").length;
    console.log(numberOfColumns)
  }

  componentDidMount(){
    window.addEventListener("resize", () => console.log("resized", this.getNumberOfGridColumns()))
  }

  render(){
    const {books} = this.props;
    const dynamicStyle = books.selected ? bookStyles.selected : bookStyles.normal;

    return (
      <div style={listStyles.root} ref={this.gridRef}>
        {books.map( (book, i) => (
          <div style={dynamicStyle} key={i} onClick={this.getNumberOfGridColumns}>
            <Book book={book}/>
          </div>))}
      </div>
    )
  }
}

export default ListBooks;