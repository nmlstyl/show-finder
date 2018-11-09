import React, { Component } from 'react';
import SignupForm from '../components/signup_form'
import LoginForm from '../components/login_form'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actions from '../actions/act'

class SignupLoginContainer extends Component {

  render() {

    return (
      <div>
        <br />
        <LoginForm />
        <SignupForm />


      </div>
    )
  }

}

export default SignupLoginContainer

// function mapStateToProps(rootReducer) {
//   return {
//     songkickArtists: rootReducer.songkickArtistsReducer.artists,
//     bandsintownArtists: rootReducer.bandsintownArtistsReducer.artists
//   }
// }
//
// function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }
//
// export default connect(mapStateToProps, mapDispatchToProps)(QueryByNameContainer)
