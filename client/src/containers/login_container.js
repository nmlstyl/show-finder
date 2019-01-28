import React, { Component } from 'react';
import LoginForm from '../components/login_form'

import FacebookLogin from 'react-facebook-login';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class LoginContainer extends Component {

  responseFacebook = (response, loginThroughApi) => {
    debugger
    console.log(response);
  }

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
        <FacebookLogin appId="1396912973772758"
               autoLoad={true}
               fields="name,email,picture"
               onClick={ this.componentClicked }
               callback={ (resp) => this.responseFacebook(resp, this.props.actions.loginThroughApi) }
               cssClass="my-facebook-button-class"
               icon="fa-facebook"/>
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
