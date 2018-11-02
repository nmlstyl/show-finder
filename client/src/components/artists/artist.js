import React from 'react'

const Artist = (props) => {

    const onTour = () => {
      if (props.touringUntil !== null){
          return  <p>On Tour Until: {props.touringUntil} <button>Find Shows</button></p>
      } else {
        return <p>No Shows Found</p>
      }
    }

    return(
      <div class="artist">
        <h2>{ props.name }</h2>
        { onTour() }
      </div>
    )
}

export default Artist
