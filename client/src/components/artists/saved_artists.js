import React from 'react'
import SavedArtist from './saved_artist'

const SavedArtists = (props) => {

    function displayArtists(){
      return props.savedArtists.map((artist, idx) => <SavedArtist name={ artist.name }/>)
    }

    return(
      <div id="artists">
        { displayArtists() }
      </div>
    )
}

export default SavedArtists
