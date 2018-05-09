import React from "react";

import Book from "./Book";
import styles from "../styles/ListBooks-styles";

class ListBooks extends React.Component {
  state = {
    toggle : false
  }

  triggerIX = () => {
    this.setState( (currentState) => ({toggle: !currentState.toggle}) );
  }

  render(){
    const {books} = this.props;
    return (
      <div style={styles.root}>
        {books.map( book => (
          <Book key={book.id} 
                book={book}
                triggerIX={this.triggerIX}/>
        ))}
      </div>
    )
  }
}

export default ListBooks;