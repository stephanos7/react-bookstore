import React from 'react';
import { Route } from "react-router-dom";

import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div >
        <Route path="/" component={Header} />
      </div>
    );
  }
}

export default App;
