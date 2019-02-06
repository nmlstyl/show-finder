import React, { Component } from 'react';
import SignupForm from '../components/signup_form'

import FacebookAccess from '../components/facebookAccess';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SignupContainer extends Component {

  success = () => {
    if (this.props.users.success === true){
      this.props.cookieAccess.set('id', this.props.users.id, { path: '/'})
      return <div className="col-md-12"><br></br>Signup Success!</div>
    }
    if (this.props.users.success === false){
      return <div className="col-md-12">Signup Problems... Try Again?</div>
    }
  }

  render() {
    return (

      <div className="row">
        <div className="col-md-12">
          <FacebookAccess action={ this.props.actions.fbLogin }/>
        </div>
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
