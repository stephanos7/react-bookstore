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
  
  handleSelect = (bookId) => this.props.selectBook(bookId, this.state.columns, this.props.gridView);

  getNumberOfGridColumns = () => {
    let gridColumnsComputedSyle = window.getComputedStyle(this.gridRef.current).getPropertyValue("grid-template-columns");
    let numberOfColumns = gridColumnsComputedSyle.split(" ").length;
    console.log(numberOfColumns, "from the getNoOfGridCols method")
    this.setState((prevState) => ({columns: numberOfColumns}));
  }

  handleClick = (viewValue) => this.props.toggleView(viewValue, this.getNumberOfGridColumns);

  utilCreateStyle = (num) => {
    return  {gridColumn : `span ${Math.floor(num/2)}`}
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
      <div>
        <div>
          <button style={{backgroundColor:"#16D3F9", fontSize:"2em"}}
                  value={"narrow"} 
                  onClick={(e) => this.handleClick(e.target.value)}>Narrow View
          </button>
          <button style={{backgroundColor:"#16D3F9", fontSize:"2em"}}
                  value={"normal"} 
                  onClick={(e) => this.handleClick(e.target.value)}>Normal View
          </button>
          <button style={{backgroundColor:"#16D3F9", fontSize:"2em"}}
                  value={"wide"} 
                  onClick={(e) => this.handleClick(e.target.value)}>Wide View
        </button>
      </div>
      <div style={Object.assign({}, this.props.gridView === "narrow" && listStyles.narrow,
                                    this.props.gridView === "normal" && listStyles.normal,
                                    this.props.gridView === "wide" && listStyles.wide )} ref={this.gridRef}>
        {books.map((book, i) => (
          <div style={Object.assign({}, this.props.gridView === "narrow" && bookStyles.narrow,
                                        this.props.gridView === "normal" && bookStyles.normal,
                                        this.props.gridView === "wide" && bookStyles.wide,
                                        book.selected === true && this.utilCreateStyle(7) )}
               key={i} onClick={() => this.handleSelect(book._id)}>
            <Book book={book}
                  gridView={this.props.gridView}
                  gridColumns={this.state.columns}
                  selectBook={this.selectBook} />
          </div>))}
      </div>
    </div>
    )
  }
}

export default ListBooks;