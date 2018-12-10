import React from 'react'
import BandsintownArtist from './bandsintown_artist'
import SongkickArtist from './songkick_artist'

const Artists = (props) => {

    function displayBandsintownArtists(){
      return props.bandsintownArtists.map((artist, idx) =>
          <BandsintownArtist name={ artist.name }
                             eventCount={ artist.eventCount }
                             id={ artist.id }
                             getBandsintownShows={ props.getBandsintownShows }
                             key={ idx }
                             cookieAccess={ props.cookieAccess }/>)
    }

    function displaySongkickArtists(){
      return props.songkickArtists.map((artist, idx) =>
        <SongkickArtist name={ artist.name }
                        touringUntil={ artist.touringUntil }
                        id={ artist.id }
                        getSongkickShows={ props.getSongkickShows }
                        key={ idx }
                        cookieAccess={ props.cookieAccess }/>)
    }

    function displayArtists(){
      if (props.hasOwnProperty('songkickArtists')){
        return displaySongkickArtists()
      }
      if (props.hasOwnProperty('bandsintownArtists')){
        return displayBandsintownArtists()
      }
    }

    function header(){
      if (props.hasOwnProperty('songkickArtists')){
        if (props.songkickArtists.length > 0) {
          return <h2>Songkick</h2>
        }
      }
      if (props.hasOwnProperty('bandsintownArtists')) {
        if (props.bandsintownArtists.length > 0) {
          return <h2>Bandsintown</h2>
        }
      }
    }

    return(
      <div className='col-sm-6' id="bandsintownArtists">
        { header() }
        { displayArtists() }
      </div>
    )
}

export default Artists