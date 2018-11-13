import React from 'react'
import BandsintownShows from '../shows/bandsintown_shows'
import { connect } from 'react-redux'

const BandsintownArtist = (props) => {

    const upcomingEvents = () => {
      if (props.eventCount !== undefined && props.eventCount !== 0){
        return  <p>Upcoming Events: { props.eventCount } &nbsp;
                <button className="btn btn-default"
                        onClick={ () => props.getBandsintownShows(props.name) }>Find Shows</button>
                <BandsintownShows bandsintownShows={ props.bandsintownShows }/>
                </p>
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

function mapStateToProps(rootReducer) {
  return {
    bandsintownShows: rootReducer.bandsintownShowsReducer.shows
  }
}

export default connect(mapStateToProps, null)(BandsintownArtist)
