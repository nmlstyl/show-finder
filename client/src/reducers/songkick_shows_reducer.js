export default function songkickShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SONGKICK_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SONGKICK_SHOWS':
      const artist_id = action.payload.artist_id
      const showsData = action.payload.shows.map(show => Object.assign({}, {artist_id: artist_id,
                                                                            name: show.displayName,
                                                                            location: show.location.city,
                                                                            venue: show.venue.displayName,
                                                                            date: show.start.date,
                                                                            time: show.start.time
                                                                          })
                                          )
      return {loading: false, shows: showsData}

    default:
      return state
  }
}
