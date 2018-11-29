export default function bandsintownShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_BANDSINTOWN_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_BANDSINTOWN_SHOWS':
      return {loading: false, shows: action.payload}

    default:
      return state
  }
}
