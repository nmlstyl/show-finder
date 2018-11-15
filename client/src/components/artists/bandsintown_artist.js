import React from 'react'
import BandsintownShows from '../shows/bandsintown_shows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/act'

const BandsintownArtist = (props) => {

    const upcomingEvents = () => {
      if (props.eventCount !== undefined && props.eventCount !== 0){
        return  <div className='upcomingEvents'>Upcoming Events: { props.eventCount } &nbsp;
                <button className="btn-xs btn-default"
                        onClick={ () => props.getBandsintownShows(props.name, props.id) }>Find Shows</button>
                <BandsintownShows bandsintownShows={ props.bandsintownShows } artistIdFromArtist={ props.id }/>
                </div>
      } else {
        return <p>No Shows Found</p>
      }
    }

    const generateSaveButton = () => {
      if (isLoggedIn() === true){
        return <button className='btn-xs btn-default'>Save Artist</button>
      }
    }

    const isLoggedIn = () => {
      if (Object.keys(props.cookieAccess.cookies).length !== 0){
        return true
      } else {
        return false
      }
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
