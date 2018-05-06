import React from 'react';
import { Route } from "react-router-dom";
import { Style } from "radium";

import styles from "./styles/App-styles";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div >
        <Style rules={styles} />
        <Route path="/" component={Header} />
      </div>
    );
  }
}

export default App;
