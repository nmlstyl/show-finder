import React from 'react'
import BandsintownShows from '../shows/bandsintown_shows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/act'

const BandsintownArtist = (props) => {

    const upcomingEvents = () => {
      if (props.eventCount !== 0){
        return  <div className='upcomingEvents'>Upcoming Events: { props.eventCount } &nbsp;
                <button className="btn-xs"
                        onClick={ () => props.getBandsintownShows(props.name, props.id) }>Find Shows</button>
                <BandsintownShows bandsintownShows={ props.bandsintownShows } artistIdFromArtist={ props.id }/>
                </div>
      } else {
        return <p>No Shows Found</p>
      }
    }

    const generateSaveButton = () => {
      if (isLoggedIn() === true && window.location.pathname !== '/savedbands'){
        return <button className='btn-xs' onClick={ () => props.actions.createSavedArtist(props.name, props.cookieAccess.cookies.id) }>Save Artist</button>
      }
    }

    const isLoggedIn = () => {
      return props.cookieAccess.cookies.hasOwnProperty('id')
    }

    return(
      <div className="artist">
        <h3>{ props.name } &nbsp; { generateSaveButton() }</h3>
        { upcomingEvents() }
      </div>
    )
}

function mapStateToProps(rootReducer) {
  return {
    bandsintownShows: rootReducer.bandsintownShowsReducer.shows
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(BandsintownArtist)
