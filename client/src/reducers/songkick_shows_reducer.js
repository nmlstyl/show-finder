export default function songkickShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SONGKICK_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SONGKICK_SHOWS':
      const showsData = action.payload.map(show => Object.assign({}, {name: show.displayName,
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
