import React, { Component } from 'react';
import SavedArtists from '../components/artists/saved_artists'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class SavedBandsContainer extends Component {

  componentDidMount() {
    this.props.actions.getSavedArtists(this.props.cookieAccess.id)
  }

  render() {
    return (
      <div id='savedbands' class="row">
        <div className="col-sm-6"><h2> Artists</h2>
          <SavedArtists savedArtists={ this.props.savedArtists }
                                                   getShows={ this.props.actions.getShows }
                                                   cookieAccess={ this.props.cookieAccess }/></div>
        <div className="col-sm-6"><h2>Bandsintown Artists</h2>

        </div>
      </div>
    )
  }
}

function mapStateToProps(rootReducer) {
  return {
    savedArtists: rootReducer.savedArtistsReducer.artists
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(SavedBandsContainer)
