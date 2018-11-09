import React, { Component } from 'react';
import SignupForm from '../components/signup_form'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actions from '../actions/act'

class SignupContainer extends Component {

  render() {

    return (
      <div>
        <br />
        <SignupForm />
      </div>
    )
  }

}

export default SignupContainer

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
