import React from 'react'
import Artist from './artist'

const Artists = (props) => {

    function displayArtists(){
      return props.artists.map(artist => <Artist name={ artist.name } touringUntil={ artist.touringUntil }/>)
    }

    return(
      <div id="artists">
        { displayArtists() }
      </div>
    )
}

export default Artists
