import React from 'react'
import SongkickArtist from './songkick_artist'

const SongkickArtists = (props) => {

    function displayArtists(){
      return props.songkickArtists.map((artist, idx) =>
        <SongkickArtist name={ artist.name }
                        touringUntil={ artist.touringUntil }
                        id={ artist.id }
                        getSongkickShows={ props.getSongkickShows }
                        key={ idx }/>)
    }

    return(
      <div id="artists">
        <h2>Songkick</h2>
        { displayArtists() }
      </div>
    )
}

export default SongkickArtists
