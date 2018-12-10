export default function savedArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SAVED_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SAVED_ARTISTS':
      const artists = action.payload
      return { ...state, artists: artists }

    case 'ADD_SAVED_ARTIST':
      return { ...state, artists: [...state.artists, action.payload] }

    case 'UPDATE_SAVED_ARTIST':
      const id = action.payload.id
      const index = state.artists.findIndex(obj => obj.id === id)
      state.artists[index] = action.payload
      return { ...state, artists: state.artists.slice() }

    default:
      return state
  }
}
