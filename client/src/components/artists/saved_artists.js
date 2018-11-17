import React from 'react'

const SavedArtists = (props) => {

    function displayArtists(){
      return props.savedArtists.map((artist, idx) => <li id="savedArtist"><button className='btn' onClick={ () => props.fetchByArtist(artist.name) }>{ artist.name }</button></li>)
    }
    //

    return(
      <div className="col-lg-12" id="savedartists">
        <ul id="savedArtists">
          { displayArtists() }
        </ul>
      </div>
    )
}

export default SavedArtists
