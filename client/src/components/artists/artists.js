import React from 'react'
import SongkickArtist from './artist'

const SongkickArtists = (props) => {

    function displayArtists(){
      return props.songkickArtists.map(artist => <SongkickArtist name={ artist.name } touringUntil={ artist.touringUntil } id={ artist.id } getShows={ props.getShows }/>)
    }

    return(
      <div id="artists">
        { displayArtists() }
      </div>
    )
}

export default SongkickArtists
