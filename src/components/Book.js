import React from "react";

import styles from "../styles/Book-styles";
import Cover from "./Cover";
import BookDetails from "./BookDetails";

class Book extends React.Component {

  render(){
    const {coverImage, authorName, selected} = this.props.book;
    const propsStyle = selected ? styles.selected : styles.normal;

    return (
      <div style={propsStyle}>
        <Cover imageURL={coverImage} />
        <BookDetails authorName={authorName} />
      </div>
    )
  }
}

export default Book;