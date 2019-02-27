import React, { Component } from 'react';
import SignupForm from '../components/forms/signup_form'

import FacebookAccess from '../components/facebookAccess';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SignupContainer extends Component {

  success = () => {
    if (this.props.users.success === true){
      this.props.cookieAccess.set('id', this.props.users.id, { path: '/'})
      return <div><br></br>&nbsp;Success!<br></br></div>
    }
    if (this.props.users.success === false){
      return <div><br></br>&nbsp;Problems... :( Try Again?<br></br></div>
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <FacebookAccess action={ this.props.actions.fbLogin }/>
                    { this.success() }
        </div>
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
