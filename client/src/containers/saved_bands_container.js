import React, { Component } from 'react';
import SavedArtists from '../components/artists/saved_artists'
import Artists from '../components/artists/artists'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'



class SavedBandsContainer extends Component {

  componentDidMount() {
    this.props.actions.getSavedArtists(this.props.cookieAccess.cookies.id)
  }

  render() {
    return (
      <div>
          <div className="row" id="artistAnchor">
            <Artists songkickArtists={ this.props.songkickArtists }
                     getSongkickShows={ this.props.actions.getSongkickShows }
                     deleteSongkickShows={ this.props.actions.deleteSongkickShows }
                     cookieAccess={ this.props.cookieAccess }/>
            <Artists bandsintownArtists={ this.props.bandsintownArtists }
                     getBandsintownShows={ this.props.actions.getBandsintownShows }
                     deleteBandsintownShows={ this.props.actions.deleteBandsintownShows }
                     cookieAccess={ this.props.cookieAccess }/>
          </div>

          <h2>SAVED ARTISTS</h2>
          <div className='row'>
            <SavedArtists savedArtists={ this.props.savedArtists }
                          fetchByArtist={ this.props.actions.fetchByArtist }
                          likeAction={ this.props.actions.likeAction }
                          cookieAccess={ this.props.cookieAccess }
                          deleteArtist={ this.props.actions.deleteArtist }/>
          </div>

      </div>
    )
  }
}

function mapStateToProps(rootReducer) {
  return {
    savedArtists: rootReducer.savedArtistsReducer.artists,
    songkickArtists: rootReducer.songkickArtistsReducer.artists,
    bandsintownArtists: rootReducer.bandsintownArtistsReducer.artists,
    songkickShows: rootReducer.songkickShowsReducer.shows,
    bandsintownShows: rootReducer.bandsintownShowsReducer.shows
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(SavedBandsContainer)
