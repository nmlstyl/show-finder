import React from 'react'
import SongkickShow from './songkick_show'

const SongkickShows = (props) => {

  function renderShows(){
    return props.songkickShows.map((show, idx) =>  <li><SongkickShow name={ show.name }
                                                                             venue={ show.venue }
                                                                             location={ show.location }
                                                                             date={ show.date }
                                                                             time={ show.time }
                                                                             artistId={ show.artist_id }/></li>)
  }

    return(
      <div className="shows">
        <ul>
        { renderShows() }
        </ul>
      </div>
    )
}

export default SongkickShows
