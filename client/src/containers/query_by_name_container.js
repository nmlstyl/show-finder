import React, { Component } from 'react';
import ArtistForm from '../components/artists/artist_form'
import Artists from '../components/artists/artists'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class QueryByNameContainer extends Component {


  constructor(props){
    super(props)
    this.state = { searchCount: 0 }
  }

  incremSearchCount = () => {
    this.setState({searchCount: this.state.searchCount + 1})
  }



  render() {

    return (
      <div>
        <br />
        <div className="row">
          <ArtistForm incremSearchCount={this.incremSearchCount}
                      fetchByArtist={ this.props.actions.fetchByArtist }
                      deleteSongkickArtists={ this.props.actions.deleteSongkickArtists }
                      deleteBandsintownArtists={ this.props.actions.deleteBandsintownArtists }/>

        </div>

        <div className="row">
          <Artists songkickArtists={ this.props.songkickArtists }
                   getSongkickShows={ this.props.actions.getSongkickShows }
                   deleteSongkickShows={ this.props.actions.deleteSongkickShows }
                   cookieAccess={ this.props.cookieAccess }
                   searchCount={this.state.searchCount}/>

          <Artists bandsintownArtists={ this.props.bandsintownArtists }
                   getBandsintownShows={ this.props.actions.getBandsintownShows }
                   deleteBandsintownShows={ this.props.actions.deleteBandsintownShows }
                   cookieAccess={ this.props.cookieAccess }
                   searchCount={this.state.searchCount}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(rootReducer) {
  return {
    songkickArtists: rootReducer.songkickArtistsReducer.artists,
    bandsintownArtists: rootReducer.bandsintownArtistsReducer.artists
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(QueryByNameContainer)
