import React, { Component } from 'react';
import SongkickArtists from '../components/artists/songkick_artists'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SavedBandsContainer extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div id='savedbands' class="row">
        <div className="col-sm-6"><SongkickArtists songkickArtists={ this.props.savedSongkickArtists }
                                                   getSongkickShows={ this.props.actions.getSongkickShows }
                                                   cookieAccess={ this.props.cookieAccess }/></div>
        <div className="col-md-6"><h2>Bandsintown Artists</h2>

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
