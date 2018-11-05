import React from 'react'

const BandsintownArtist = (props) => {


    return(
      <div className="artist">
        <h3>{ props.name }</h3>
        <p>Upcoming Events:  { props.eventCount }</p>
      </div>
    )
}

export default BandsintownArtist

// const onTour = () => {
//   if (props.touringUntil !== null){
//     return  <p>On Tour Until: {props.touringUntil} <button onClick={ () => props.getShows(props.id) }>Find Shows</button></p>
//   } else {
//     return <p>No Shows Found</p>
//   }
// }
