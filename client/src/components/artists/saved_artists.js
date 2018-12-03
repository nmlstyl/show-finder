import React from 'react'
import SavedArtist from './saved_artist'

const SavedArtists = (props) => {
    function displayArtists(){
      return props.savedArtists.map((artist, idx) => <SavedArtist name={ artist.name }
                                                                  fetchByArtist={ props.fetchByArtist }
                                                                  key={ idx }
                                                                  likeAction={ props.likeAction }
                                                                  likes={ artist.likes }/>)
    }

    return(
      <div className="col-lg-12" id="savedartists">
        <ul id="savedArtists">
          { displayArtists() }
        </ul>
      </div>
    )
}

export default SavedArtists
