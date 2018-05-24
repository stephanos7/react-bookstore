import React from 'react';
import { Route } from "react-router-dom";
import { Style } from "radium";

import * as BooksAPI from "./utils/BooksAPI";
import { enrichDataWithProductProperties } from "./utils/enrichProductData";

import styles from "./styles/App-styles";
import Header from "./components/Header";
import ListBooks from "./components/ListBooks";
import GridViewOptions from './components/GridViewOptions';

class App extends React.Component {

  state = {
    books : []
  }

  fetchAllBooks = (cb) => BooksAPI.getAll().then( books => cb(books, this.setStateWithEnrichedProducts));  

  setStateWithEnrichedProducts = (enrichedDataSet) => this.setState((prevState) => ({books:enrichedDataSet}));

  selectBook = (bookId) => {
    const books = this.state.books
    // 1. with traditional for loop

    // for(let i=0; i < books.length; i++){
    //   if(books[i]._id === bookId){
    //     books[i].selected = true;
    //     books[i-1].selected = true;
    //     books[i+1].selected = true;
    //   }
    // }
    // this.setState(() => ({books}));

    // 2. with a filter method

    let booksWithSelectedBook = books.filter( (book, i, arr) => {
      if(book._id === bookId){
        book.selected = true;
        arr[i-1].collapsed = true;
        arr[i+1].collapsed = true;
        
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
          <div>
            <GridViewOptions />
            <ListBooks books={this.state.books}
                      selectBook={this.selectBook} />
          </div>
          )} />
      </div>
    );
  }
}

export default App;
