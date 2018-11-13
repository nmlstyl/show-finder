import React, { Component } from 'react';
import SignupForm from '../components/signup_form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SignupContainer extends Component {

  success = () => {
    if (this.props.users.length !== 0){
      // should be called when the user is created
      this.props.cookieAccess.set('id', this.props.users.id, { path: '/'})
      // name, value, path
      return 'Sign Up Success!'
    }
  }

  render() {
    return (
      <div className="row">
        { this.success() }
        <SignupForm signupThroughApi={ this.props.actions.signupThroughApi } />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
