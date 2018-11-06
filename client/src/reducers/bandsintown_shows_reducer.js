export default function bandsintownShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_BANDSINTOWN_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_BANDSINTOWN_SHOWS':
      const showsData = action.payload.map(show => show.description)
      return {loading: false, shows: showsData}

    default:
      return state
  }
}
