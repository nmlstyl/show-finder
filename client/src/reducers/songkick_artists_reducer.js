export default function songkickArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SONGKICK_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SONGKICK_ARTISTS':
      return {loading: false, artists: action.payload}

    default:
      return state
  }
}
