import React, { Component } from 'react';
import SignupForm from '../components/signup_form'

import FacebookLogin from 'react-facebook-login';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SignupContainer extends Component {

  responseFacebook = (response) => {
    console.log(response);
  }

  success = () => {
    if (this.props.users.userCreated === true){
      this.props.cookieAccess.set('id', this.props.users.id, { path: '/'})
      return <div className="col-md-12">Signup Success!</div>
    }
    if (this.props.users.userCreated === false){
      return <div className="col-md-12">Signup Problems... Try Again?</div>
    }
  }

  render() {
    return (
      <div className="row">
        { this.success() }
        <FacebookLogin appId="1396912973772758"
               autoLoad={true}
               fields="name,email,picture"
               onClick={ this.componentClicked }
               callback={ this.responseFacebook }
               cssClass="my-facebook-button-class"
               icon="fa-facebook"/>
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
