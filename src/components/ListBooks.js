import React from "react";
import { debounce } from "lodash";

import Book from "./Book";
import listStyles from "../styles/ListBooks-styles";
import bookStyles from "../styles/Book-styles";

class ListBooks extends React.Component {

  state = {
    columns : null
  }

  gridRef = React.createRef();

  handleClick = () => this.props.selectBook();

  getNumberOfGridColumns = () => {
    let gridColumnsComputedSyle = window.getComputedStyle(this.gridRef.current).getPropertyValue("grid-template-columns");
    let numberOfColumns = gridColumnsComputedSyle.split(" ").length;
    this.setState((prevState) => ({columns: numberOfColumns}));
  }

  componentDidMount(){
    this.getNumberOfGridColumns()
    // create an hoc for this?
    window.addEventListener("resize", debounce(this.getNumberOfGridColumns, 400, {
      'leading': false,
      'trailing': true
  }));
  }

  render(){
    const {books} = this.props;
    const dynamicStyle = books.selected ? bookStyles.selected : bookStyles.normal;

    return (
      <div style={listStyles.root} ref={this.gridRef}>
        {books.map( (book, i) => (
          <div style={dynamicStyle} key={i} onClick={this.handleClick}>
            <Book book={book}
                  gridColumns={this.state.columns}
                  selectBook={this.selectBook}/>
          </div>))}
      </div>
    )
  }
}

export default ListBooks;