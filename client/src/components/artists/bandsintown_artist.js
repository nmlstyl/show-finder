import React from 'react'

const BandsintownArtist = (props) => {

    const upcomingEvents = () => {
      if (props.eventCount !== undefined && props.eventCount !== 0){
        return  <p>Upcoming Events: { props.eventCount } &nbsp; <button className="btn btn-default" onClick={ () => props.getBandsintownShows(props.name) }>Find Shows</button></p>
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
