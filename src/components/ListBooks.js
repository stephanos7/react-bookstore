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

  handleClick = (bookId) => this.props.selectBook(bookId, this.state.columns, this.props.gridView);

  getNumberOfGridColumns = () => {
    let gridColumnsComputedSyle = window.getComputedStyle(this.gridRef.current).getPropertyValue("grid-template-columns");
    let numberOfColumns = gridColumnsComputedSyle.split(" ").length;
    console.log(numberOfColumns, "from the getNoOfGridCols method")
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

    return (
      <div style={Object.assign({}, this.props.gridView === "narrow" && listStyles.narrow,
                                    this.props.gridView === "normal" && listStyles.normal,
                                    this.props.gridView === "wide" && listStyles.wide )} ref={this.gridRef}>
        {books.map((book, i) => (
          <div style={Object.assign({}, this.props.gridView === "narrow" && bookStyles.narrow,
                                        this.props.gridView === "normal" && bookStyles.normal,
                                        this.props.gridView === "wide" && bookStyles.wide )}
               key={i} onClick={() => this.handleClick(book._id)}>
            <Book book={book}
                  gridView={this.props.gridView}
                  gridColumns={this.state.columns}
                  selectBook={this.selectBook} />
          </div>))}
      </div>
    )
  }
}

export default ListBooks;