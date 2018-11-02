import React, { Component } from 'react';
import ArtistForm from '../components/artists/artist_form'
import Artists from '../components/artists/artists'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class QueryByNameContainer extends Component {

  render() {

    return (
      <div>
        Find Shows By:
        <br /><br />
        <ArtistForm fetchByArtist={ this.props.actions.fetchByArtist } />
        <Artists artists={ this.props.artists }/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    artists: state.artistsReducer.artists,
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(QueryByNameContainer)
