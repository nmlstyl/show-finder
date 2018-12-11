import React from 'react'
import SongkickShows from '../shows/songkick_shows'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/act'

const SongkickArtist = (props) => {

    const onTour = () => {
      if (props.touringUntil !== null){
        return  <div className='OnTour'>On Tour Until: {props.touringUntil} &nbsp;
                <button className="btn-xs"
                        onClick={ () => props.getSongkickShows(props.id) }>Find Shows</button>
                <SongkickShows songkickShows={ props.songkickShows } artistIdFromArtist={ props.id }/>
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
        { onTour() }
      </div>
    )
}

function mapStateToProps(rootReducer) {
  return {
    songkickShows: rootReducer.songkickShowsReducer.shows
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(SongkickArtist)
