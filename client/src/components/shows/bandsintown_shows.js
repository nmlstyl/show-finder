import React from 'react'
import BandsintownShow from './bandsintown_show'

const BandsintownShows = (props) => {

  function renderShows(){
    return props.bandsintownShows
      .filter(show => props.artistIdFromArtist === show.artist_id)
      .map((show, idx) => <BandsintownShow name={ show.name }
                                           venue={ show.venue }
                                           location={ show.location }
                                           date={ show.date }
                                           time={ show.time }
                                           artistId={ show.artist_id }
                                           key={ idx }/>)
  }

    return(
      <div className="shows">
        <ul>
        { renderShows() }
        </ul>
      </div>
    )
}

export default BandsintownShows
