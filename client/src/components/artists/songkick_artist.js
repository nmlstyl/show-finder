import React from 'react'
import SongkickShows from '../shows/songkick_shows'
import { connect } from 'react-redux'

const SongkickArtist = (props) => {

    const onTour = () => {
      if (props.touringUntil !== null){
        return  <div className='OnTour'>On Tour Until: {props.touringUntil} &nbsp;
                <button className="btn btn-default"
                        onClick={ () => props.getSongkickShows(props.id) }>Find Shows</button>
                <SongkickShows songkickShows={ props.songkickShows } artistIdFromArtist={ props.id }/>
                </div>
      } else {
        return <p>No Shows Found</p>
      }
    }

    return(
      <div className="artist">
        <h3>{ props.name }</h3>
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
