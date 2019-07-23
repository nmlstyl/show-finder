import React, { Component } from 'react';
import Artist from './artist'

class Artists extends Component {

    state = { searchNumber: 0 }

    displayBandsintownArtists = () => {
      return this.props.bandsintownArtists.map((artist, idx) =>
          <Artist name={ artist.name }
                  eventCount={ artist.eventCount }
                  id={ artist.id }
                  getBandsintownShows={ this.props.getBandsintownShows }
                  deleteBandsintownShows={ this.props.deleteBandsintownShows }
                  key={ idx }
                  cookieAccess={ this.props.cookieAccess }/>)
    }

    displaySongkickArtists = () =>{
      let results = this.props.songkickArtists.map((artist, idx) =>
        <Artist name={ artist.name }
                touringUntil={ artist.touringUntil }
                id={ artist.id }
                getSongkickShows={ this.props.getSongkickShows }
                deleteSongkickShows={ this.props.deleteSongkickShows }
                key={ idx }
                cookieAccess={ this.props.cookieAccess }/>)
      if (window.location.pathname === '/savedbands'){
        results = results[0]
      }
      return results
    }


    displayArtists = () => {
      if (this.props.hasOwnProperty('songkickArtists')){
        if (this.props.songkickArtists.length > 0) {
          return this.displaySongkickArtists()
        }
      }
      if (this.props.hasOwnProperty('bandsintownArtists')){
        if (this.props.bandsintownArtists.length > 0 && this.props.bandsintownArtists[0].id !== undefined) {
          return this.displayBandsintownArtists()
        }
      }
    }


    header = () => {
      if (this.props.searchCount > 0) {

        if (this.props.hasOwnProperty('songkickArtists') === true){
          return <h2>SONGKICK</h2>
        } else {
          return <h2>NO RESULTS</h2>
        }

        if (this.props.hasOwnProperty('bandsintownArtists') === true) {
          return <h2>BANDSINTOWN</h2>
        } else {
          return <h2>NO RESULTS</h2>
        }
      }
    }

    render(){
      return(
        <div className='col-sm-6'>
          { this.header() }
          { this.displayArtists() }
        </div>
      )
    }
}

export default Artists
