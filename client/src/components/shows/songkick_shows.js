import React from 'react'
import SongkickShow from './songkick_show'

const SongkickShows = (props) => {

  function renderShows(){
    return props.songkickShows
    .filter((show) => props.artistIdFromArtist === show.artist_id)
    .map((show, idx) => <SongkickShow name={ show.name }
                                      venue={ show.venue }
                                      location={ show.location }
                                      date={ show.date }
                                      time={ show.time }
                                      artistId={ show.artist_id }
                                      url={ show.url }
                                      key={ idx }/>) }

    return(
      <div className="shows">
        <ul>
        { renderShows() }
        </ul>
      </div>
    )
}

export default SongkickShows
