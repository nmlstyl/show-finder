import React, { Component } from 'react';
import './App.css';
import QueryByNameContainer from './containers/query_by_name_container'


class App extends Component {

  render() {
    return (
      <div className="App">
        <QueryByNameContainer />
      </div>
    );
  }
}

export default App;
