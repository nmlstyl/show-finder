import React, { Component } from 'react';
import LoginForm from '../components/login_form'

import FacebookAccess from '../components/facebookAccess';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class LoginContainer extends Component {

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


        <div className="col-sm-12">
          <FacebookAccess action={ this.props.actions.fbLogin } />
                  { this.success() }
        </div>

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
