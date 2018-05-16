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
  fetchAllBooks = (cb) => BooksAPI.getAll().then( books => this.createProductLedger(books, this.setStateFromLedger));  

  createProductLedger = (products, cb) => {
    const ledger = products.map( product => Object.defineProperties(product, {selected:{value:null, writable:true}}));
    return cb(ledger);
  }
  setStateFromLedger = (productLedger) => this.setState((prevState) => ({books:productLedger}));

  componentDidMount(){
    this.fetchAllBooks(this.createProductLedger);
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
