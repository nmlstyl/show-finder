export default function bandsintownShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_BANDSINTOWN_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_BANDSINTOWN_SHOWS':
      const artist_id = action.payload.artist_id
      const showsData = action.payload.shows.map(show => Object.assign({}, {  artist_id: artist_id,
                                                                              name: show.description,
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
