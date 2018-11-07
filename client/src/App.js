import React, { Component } from 'react';
import './App.css';
import QueryByNameContainer from './containers/query_by_name_container'
import { Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/artistsearch" component={QueryByNameContainer} />
      </div>
    );
  }
}

export default App;
