import React, { Component } from 'react';
import LoginForm from '../components/login_form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class LoginContainer extends Component {

  success = () => {
    if (this.props.users.length !== 0){
      this.props.cookieAccess.set('id', this.props.users.id, { path: '/'})
      return <div className="col-md-12">Login Success!</div>
    }
  }

  render() {
    return (
      <div className="row">
        { this.success() }
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
