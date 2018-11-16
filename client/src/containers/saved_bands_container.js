import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SavedBandsContainer extends Component {

  render() {

    return (
      <div>

      </div>
    )
  }

}

function mapStateToProps(rootReducer) {
  return {
    savedSongkickArtists: rootReducer.savedSongkickArtistsReducer.artists
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(SavedBandsContainer)
