import React, { Component } from 'react';
import LoginForm from '../components/login_form'

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actions from '../actions/act'

class LoginContainer extends Component {

  render() {

    return (
      <div>
        <br />
        <LoginForm />
      </div>
    )
  }

}

export default LoginContainer

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
