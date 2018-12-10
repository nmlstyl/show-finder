export default function songkickArtistsReducer(state = { artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SONGKICK_ARTISTS':
      return { ...state, loading: true}

    case 'FETCH_SONGKICK_ARTISTS':
      return { artists: action.payload, loading: false }

    default:
      return state
  }
}
