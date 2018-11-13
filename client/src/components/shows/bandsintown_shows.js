import React from 'react'
import BandsintownShow from './bandsintown_show'

const BandsintownShows = (props) => {

  function renderShows(){
    return props.songkickShows.map((show, idx) =>  <li><BandsintownShow /></li>)
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
