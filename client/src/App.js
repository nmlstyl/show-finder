import React, { Component } from 'react';
import './App.css';
import QueryByNameContainer from './containers/query_by_name_container'
import SignupContainer from './containers/signup_container'
import LoginContainer from './containers/login_container'
import Navbar from './components/navbar'
import { Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';


class App extends Component {

  render() {
    return (
      <div className="App">

        <Navbar />
        <Route path="/artistsearch" render={ () => (<QueryByNameContainer cookies={this.props.cookies}/>) } />
        <Route path="/signup" render={ () => (<SignupContainer cookies={this.props.cookies}/>) } />
        <Route path="/login" render={ () => (<LoginContainer cookies={this.props.cookies}/>) } />
      </div>
    );
  }
}

export default withCookies(App);
