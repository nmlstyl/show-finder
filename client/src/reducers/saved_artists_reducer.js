export default function savedArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SAVED_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SAVED_ARTISTS':
      const artists = action.payload
      return { ...state, artists: artists }

    case 'ADD_SAVED_ARTIST':
      return { ...state, artists: [...state.artists, action.payload] }

    default:
      return state
  }
}
