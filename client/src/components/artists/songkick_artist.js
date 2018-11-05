import React from 'react'

const SongkickArtist = (props) => {

    const onTour = () => {
      if (props.touringUntil !== null){
        return  <p>On Tour Until: {props.touringUntil} &nbsp; <button class="btn btn-default" onClick={ () => props.getSongkickShows(props.id) }>Find Shows</button></p>
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

export default SongkickArtist
