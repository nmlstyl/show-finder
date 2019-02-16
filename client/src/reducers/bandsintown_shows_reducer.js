export default function bandsintownShowsReducer(state = { shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_BANDSINTOWN_SHOWS':
      return { ...state, loading: true}

    case 'FETCH_BANDSINTOWN_SHOWS':
      return { shows: action.payload, loading: false }

    case 'DELETE_ALL_BANDSINTOWN_SHOWS':
      return state = { shows: [], loading: false }

    default:
      return state
  }
}
