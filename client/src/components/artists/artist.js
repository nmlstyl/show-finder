import React, { Component } from 'react';
import SongkickShows from '../shows/songkick_shows'
import BandsintownShows from '../shows/bandsintown_shows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/act'

class Artist extends Component {

    state = {
      message: '',
      findshows: false
    }

    onTour = () => {  // for Songkick
      if (this.props.touringUntil !== null){
        return  <div className='OnTour'>On Tour Until: {this.props.touringUntil} &nbsp;
                <button className="btn-xs"
                        onClick={ () => this.toggleFindSongkickShows() }>Find Shows</button>
                <SongkickShows songkickShows={ this.props.songkickShows } artistIdFromArtist={ this.props.id }/>
                </div>
      } else {
        return <p>No Shows Found</p>
      }
    }

    upcomingEvents = () => {
       if (this.props.eventCount !== 0){
         return  <div className='upcomingEvents'>Upcoming Events: { this.props.eventCount } &nbsp;
                 <button className="btn-xs"
                         onClick={ () => this.toggleFindBandsintownShows() }>Find Shows</button>
                 <BandsintownShows bandsintownShows={ this.props.bandsintownShows } artistIdFromArtist={ this.props.id }/>
                 </div>
       } else {
         return <p>No Shows Found</p>
       }
     }

    toggleFindSongkickShows = () => {
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

    toggleFindBandsintownShows = () => {
      if (this.state.findshows === false){
        this.props.getBandsintownShows(this.props.name, this.props.id)
        this.setState({
          findshows: true
        })
      } else {
        this.props.deleteBandsintownShows()
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

    displayShows = () => {
      if (this.props.hasOwnProperty('touringUntil') === true) {
        return this.onTour()  // for Songkick
      }
      if (this.props.hasOwnProperty('eventCount') === true) {
        return this.upcomingEvents()  // for Bandsintown
      }
    }

    render(){
      return(
        <div className="artist">
          { this.state.message }
          <h3>{ this.props.name } &nbsp; { this.generateSaveButton() }</h3>
          { this.displayShows() }
        </div>
      )
    }
}

function mapStateToProps(rootReducer) {
  return {
    songkickShows: rootReducer.songkickShowsReducer.shows,
    bandsintownShows: rootReducer.bandsintownShowsReducer.shows
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(Artist)
