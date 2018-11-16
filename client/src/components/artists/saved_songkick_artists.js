import React from 'react'
import SavedSongkickArtist from './saved_songkick_artist'

const SavedSongkickArtists = (props) => {

    function displayArtists(){
      return props.savedSongkickArtists.map((artist, idx) => <SavedSongkickArtist name={ artist.name }/>)
    }

    return(
      <div id="artists">
        { displayArtists() }
      </div>
    )
}

export default SavedSongkickArtists
