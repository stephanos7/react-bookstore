import React from 'react';
import { Route } from "react-router-dom";
import { Style } from "radium";

import * as BooksAPI from "./utils/BooksAPI";
import { enrichDataWithProductProperties } from "./utils/enrichProductData";

import styles from "./styles/App-styles";
import Header from "./components/Header";
import ListBooks from "./components/ListBooks";

class App extends React.Component {

  state = {
    books : []
  }

  fetchAllBooks = (cb) => BooksAPI.getAll().then( books => cb(books, this.setStateWithEnrichedProducts));  

  setStateWithEnrichedProducts = (enrichedDataSet) => this.setState((prevState) => ({books:enrichedDataSet}));

  selectBook = (bookId) => {
    const books = this.state.books
    let booksWithSelectedBook = books.filter( book => {
      if(book._id === bookId){
        book.selected = true;
      }
      return book;
    });
    this.setState(() => ({books:booksWithSelectedBook}));
  }

  componentDidMount(){
    this.fetchAllBooks(enrichDataWithProductProperties);
  }

  render() {
    return (
      <div >
        <Style rules={styles} />
        <Route path="/" component={Header} />
        <Route path="/bookstore" render={() => (
          <ListBooks books={this.state.books}
                     selectBook={this.selectBook} />
        )} />
      </div>
    );
  }
}

export default App;
