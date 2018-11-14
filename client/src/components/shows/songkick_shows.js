import React from 'react'
import SongkickShow from './songkick_show'

const SongkickShows = (props) => {

  function renderShows(){
    // here is where we need some logic - only display shows if artist_id and show_artist_id match
    return props.songkickShows.map((show, idx) =>  {  if (props.artistIdFromArtist === show.artist_id){
                                                        return  <li><SongkickShow name={ show.name }
                                                                             venue={ show.venue }
                                                                             location={ show.location }
                                                                             date={ show.date }
                                                                             time={ show.time }
                                                                             artistId={ show.artist_id }/></li>}
                                                    })
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
