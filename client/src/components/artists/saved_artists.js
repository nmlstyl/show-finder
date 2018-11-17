import React from 'react'
import SavedArtist from './saved_artist'

const SavedArtists = (props) => {

    function displayArtists(){
      return props.savedArtists.map((artist, idx) => <SavedArtist name={ artist.name } key={ idx }/>)
    }

    return(
      <div className="col-lg-12" id="savedartists">
        { displayArtists() }
      </div>
    )
}

export default SavedArtists
