import React, { Component } from 'react';
import SignupForm from '../components/signup_form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SignupContainer extends Component {

  render() {
    return (
      <div>
        <br />
        <div className="row"><SignupForm signupThroughApi={ this.props.actions.signupThroughApi } cookies={ this.props.cookies }/></div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(null, mapDispatchToProps)(SignupContainer)
