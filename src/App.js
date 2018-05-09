import React from 'react';
import { Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import { Style } from "radium";

import styles from "./styles/App-styles";
import Header from "./components/Header";
import ListBooks from "./components/ListBooks";

class App extends React.Component {

  state = {
    books : []
  }
  
  fetchAllBooks(){
    BooksAPI.getAll().then( books => this.setState( () => ({books})));  
  }

  componentDidMount(){
    this.fetchAllBooks();
  }

  render() {
    return (
      <div >
        <Style rules={styles} />
        <Route path="/" component={Header} />
        <Route path="/bookstore" render={() => (
          <ListBooks books={this.state.books} />
        )} />
      </div>
    );
  }
}

export default App;
