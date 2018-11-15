export default function savedSongkickArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SAVED_SONGKICK_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SAVED_SONGKICK_ARTISTS':
      debugger
      return {loading: false, artists: action.payload}

    default:
      return state
  }
}
