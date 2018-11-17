import React from 'react'
import SavedArtist from './saved_artist'

const SavedArtists = (props) => {

    function displayArtists(){
      debugger
      return props.savedArtists.map((artist, idx) => <SavedArtist name={ artist.name } key={ idx }/>)
    }

    return(
      <div className="row" id="artists">
        { displayArtists() }
      </div>
    )
}

export default SavedArtists
