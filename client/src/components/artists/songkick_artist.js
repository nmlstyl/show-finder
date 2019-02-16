import React, { Component } from 'react';
import SongkickShows from '../shows/songkick_shows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/act'

class SongkickArtist extends Component {

    state = {
      message: '',
      findshows: false
    }

    onTour = () => {
      if (this.props.touringUntil !== null){
        return  <div className='OnTour'>On Tour Until: {this.props.touringUntil} &nbsp;
                <button className="btn-xs"
                        onClick={ () => this.toggleFindShows() }>Find Shows</button>
                <SongkickShows songkickShows={ this.props.songkickShows } artistIdFromArtist={ this.props.id }/>
                </div>
      } else {
        return <p>No Shows Found</p>
      }
    }


    toggleFindShows = () => {
      if (this.state.findshows === false){
        this.props.getSongkickShows(this.props.id)
        this.setState({
          findshows: true
        })
      } else {
        this.props.deleteSongkickShows()
        this.setState({
          findshows: false
        })
      }
    }

    clickSaveButton = () => {
      this.setState({ message: 'Artist Saved.' })
      this.props.actions.createSavedArtist(this.props.name, this.props.cookieAccess.cookies.id)
    }

    generateSaveButton = () => {
      if (this.isLoggedIn() === true && window.location.pathname !== '/savedbands'){
        return <button className='btn-xs' onClick={ () => this.clickSaveButton() }>Save Artist</button>
      }
    }

    isLoggedIn = () => {
      return this.props.cookieAccess.cookies.hasOwnProperty('id')
    }

    render(){
      return(
        <div className="artist">
          { this.state.message }
          <h3>{ this.props.name } &nbsp; { this.generateSaveButton() }</h3>
          { this.onTour() }
        </div>
      )
    }
}

function mapStateToProps(rootReducer) {
  return {
    songkickShows: rootReducer.songkickShowsReducer.shows
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(SongkickArtist)
