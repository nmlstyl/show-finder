export default function songkickShowsReducer(state = { shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SONGKICK_SHOWS':
      return { ...state, loading: true}

    case 'FETCH_SONGKICK_SHOWS':
      return { shows: action.payload, loading: false}

    case 'DELETE_ALL_SONGKICK_SHOWS':
      return state = { shows: [], loading: false }

    default:
      return state
  }
}
