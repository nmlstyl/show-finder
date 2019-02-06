import React, { Component } from 'react';
import LoginForm from '../components/login_form'

import FacebookAccess from '../components/facebookAccess';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class LoginContainer extends Component {

  success = () => {
    if (this.props.users.userFound === true){
      this.props.cookieAccess.set('id', this.props.users.id, { path: '/'})
      return <div className="col-md-12">Login Success!</div>
    }
    if (this.props.users.userFound === false){
      return <div className="col-md-12">Login Problems... Try Again?</div>
    }
  }

  render() {
    return (
      <div className="row">
        { this.success() }
        <FacebookAccess action={ this.props.actions.fbLogin } />
        <LoginForm loginThroughApi={ this.props.actions.loginThroughApi } />
      </div>
    )
  }

}

function mapStateToProps(rootReducer) {
  return {
    users: rootReducer.usersReducer.users
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
