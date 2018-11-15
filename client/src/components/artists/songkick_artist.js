import React from 'react'
import SongkickShows from '../shows/songkick_shows'
import { connect } from 'react-redux'

const SongkickArtist = (props) => {

    const onTour = () => {
      if (props.touringUntil !== null){
        return  <div className='OnTour'>On Tour Until: {props.touringUntil} &nbsp;
                <button className="btn-xs btn-default"
                        onClick={ () => props.getSongkickShows(props.id) }>Find Shows</button>
                <SongkickShows songkickShows={ props.songkickShows } artistIdFromArtist={ props.id }/>
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
        { onTour() }
      </div>
    )
}

function mapStateToProps(rootReducer) {
  return {
    songkickShows: rootReducer.songkickShowsReducer.shows
  }
}

export default connect(mapStateToProps, null)(SongkickArtist)
