import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import BookDetails from "./BookDetails";

class Book extends React.Component {
  handleClick = () => {
    this.props.triggerIX();
  }

  render(){
    const {coverImage, authorName} = this.props.book;
    return (
      <div style={styles.root} onClick={() => this.handleClick()}>
        <Cover imageURL={coverImage}/>
        <BookDetails authorName={authorName} />
      </div>
    )
  }
}

export default Book;