import React, { Component } from 'react';
import SavedSongkickArtists from '../components/artists/saved_songkick_artists'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SavedBandsContainer extends Component {

  componentDidMount() {
    this.props.actions.getSavedSongkickArtists(this.props.cookieAccess.id)
  }

  render() {
    return (
      <div id='savedbands' class="row">
        <div className="col-sm-6"><h2>Songkick Artists</h2>
          <SavedSongkickArtists savedSongkickArtists={ this.props.savedSongkickArtists }
                                                   getSongkickShows={ this.props.actions.getSongkickShows }
                                                   cookieAccess={ this.props.cookieAccess }/></div>
        <div className="col-sm-6"><h2>Bandsintown Artists</h2>

        </div>
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
