import React, { Component } from 'react';
import ArtistForm from '../components/artists/artist_form'
import SongkickArtists from '../components/artists/artists'

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
        <SongkickArtists songkickArtists={ this.props.songkickArtists } getShows={ this.props.actions.getShows }/>
      </div>
    )
  }

}

function mapStateToProps(rootReducer) {
  return {
    songkickArtists: rootReducer.songkickArtistsReducer.artists,
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(QueryByNameContainer)
