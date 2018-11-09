import React, { Component } from 'react';
import './App.css';
import QueryByNameContainer from './containers/query_by_name_container'
import SignupContainer from './containers/signup_container'
import LoginContainer from './containers/login_container'
import Navbar from './components/navbar'
import { Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/artistsearch" component={QueryByNameContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} />
      </div>
    );
  }
}

export default App;
