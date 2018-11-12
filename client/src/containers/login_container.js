import React, { Component } from 'react';
import LoginForm from '../components/login_form'

class LoginContainer extends Component {

  render() {

    return (
      <div>
        <br />
        <div className="row"><LoginForm /></div>
      </div>
    )
  }

}

export default LoginContainer
