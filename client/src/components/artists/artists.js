import React from 'react'
import Artist from './artist'

const Artists = (props) => {

    function displayBandsintownArtists(){
      return props.bandsintownArtists.map((artist, idx) =>
          <Artist name={ artist.name }
                  eventCount={ artist.eventCount }
                  id={ artist.id }
                  getBandsintownShows={ props.getBandsintownShows }
                  deleteBandsintownShows={ props.deleteBandsintownShows }
                  key={ idx }
                  cookieAccess={ props.cookieAccess }/>)
    }

    function displaySongkickArtists(){
      let results = props.songkickArtists.map((artist, idx) =>
        <Artist name={ artist.name }
                touringUntil={ artist.touringUntil }
                id={ artist.id }
                getSongkickShows={ props.getSongkickShows }
                deleteSongkickShows={ props.deleteSongkickShows }
                key={ idx }
                cookieAccess={ props.cookieAccess }/>)
      if (window.location.pathname === '/savedbands'){
        results = results[0]
      }
      return results
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
      if (props.hasOwnProperty('songkickArtists') === true){
        if (props.songkickArtists.length > 0) {
          return <h2>SONGKICK</h2>
        }
      }
      if (props.hasOwnProperty('bandsintownArtists') === true) {
        if (props.bandsintownArtists.length > 0) {
          return <h2>BANDSINTOWN</h2>
        }
      }
    }

    return(
      <div className='col-sm-6'>
        { header() }
        { displayArtists() }
      </div>
    )
}

export default Artists
