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
    const stateStyle = this.state.selected ? styles.selected : styles.normal;

    return (
      <div>
        <div style={stateStyle} onClick={() => this.selectBook()}>
          <Cover imageURL={coverImage}/>
          <BookDetails authorName={authorName} />
        </div>
      </div>
    )
  }
}

export default Book;