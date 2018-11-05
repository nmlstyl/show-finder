import React from 'react'

const BandsintownArtist = (props) => {

    const upcomingEvents = () => {
      if (props.eventCount !== 0){
        return  <p>Upcoming Events: { props.eventCount }</p>
      } else {
        return <p>No Shows Found</p>
      }
    }

    return(
      <div className="artist">
        <h3>{ props.name }</h3>
        { upcomingEvents() }
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
