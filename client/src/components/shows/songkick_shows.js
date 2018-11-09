import React from 'react'
import SongkickShow from './songkick_show'

const SongkickShows = (props) => {

  function renderShows(){
    props.songkickShows.map((show, idx) =>  <SongkickShow name={ show }/>)
  }

    return(
      <div className="shows">
        { renderShows() }
      </div>
    )
}

export default SongkickShows
