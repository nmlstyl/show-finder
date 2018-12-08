import React from 'react'
import SongkickArtist from './songkick_artist'

const SongkickArtists = (props) => {

    function displayArtists(){
      return props.songkickArtists.map((artist, idx) =>
        <SongkickArtist name={ artist.name }
                        touringUntil={ artist.touringUntil }
                        id={ artist.id }
                        getSongkickShows={ props.getSongkickShows }
                        key={ idx }
                        cookieAccess={ props.cookieAccess }/>)
    }

    function header(){
      if (props.songkickArtists.length > 0){
        return <h2>Songkick</h2>
      }
    }

    return(
      <div className='col-sm-6' id="songkickArtists">
        { header() }
        { displayArtists() }
      </div>
    )
}

export default SongkickArtists
