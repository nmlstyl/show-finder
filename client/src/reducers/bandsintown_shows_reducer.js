export default function bandsintownShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_BANDSINTOWN_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_BANDSINTOWN_SHOWS':
      debugger
      const showsData = action.payload.map(show => Object.assign({}, {name: show.description,
                                                                      location: show.venue.city,
                                                                      venue: show.venue.name,
                                                                      date: show.datetime.substring(0, 10),
                                                                      time: show.datetime.substring(11, 19)
                                                                    })
                                            )
      return {loading: false, shows: showsData}

    default:
      return state
  }
}
