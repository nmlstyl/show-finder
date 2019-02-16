import React, { Component } from 'react';
import BandsintownShows from '../shows/bandsintown_shows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/act'

class BandsintownArtist extends Component {

    state = {
      message: '',
      findshows: false
    }

    upcomingEvents = () => {
      if (this.props.eventCount !== 0){
        return  <div className='upcomingEvents'>Upcoming Events: { this.props.eventCount } &nbsp;
                <button className="btn-xs"
                        onClick={ () => this.toggleFindShows() }>Find Shows</button>
                <BandsintownShows bandsintownShows={ this.props.bandsintownShows } artistIdFromArtist={ this.props.id }/>
                </div>
      } else {
        return <p>No Shows Found</p>
      }
    }

    toggleFindShows = () => {
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
      if (this.isLoggedIn() === true && window.location.pathname === '/'){
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
          { this.upcomingEvents() }
        </div>
      )
    }
}

function mapStateToProps(rootReducer) {
  return {
    bandsintownShows: rootReducer.bandsintownShowsReducer.shows
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(BandsintownArtist)
