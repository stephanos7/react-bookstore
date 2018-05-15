import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import BookDetails from "./BookDetails";

class Book extends React.Component {
  state = {
    selected : false
  }

  selectBook = () => {
    this.setState((prevState) => ({selected : !prevState.selected}) )
  }


  render(){
    const {coverImage, authorName} = this.props.book;
    const selectedStyle = {
      width : this.state.selected ? 500 : null
    }
    return (
      <div>
        <div style={{...styles.root, ...selectedStyle}} onClick={() => this.selectBook()}>
          <Cover imageURL={coverImage}/>
          <BookDetails authorName={authorName} />
        </div>
      </div>
    )
  }
}

export default Book;