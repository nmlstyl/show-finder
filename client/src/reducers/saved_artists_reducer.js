export default function savedArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SAVED_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SAVED_ARTISTS':
      let artists = action.payload
      return { ...state, artists: artists }

    case 'ADD_SAVED_ARTIST':
      return { ...state, artists: [...state.artists, action.payload] }

    case 'UPDATE_SAVED_ARTIST':
      let id = action.payload.id
      let idx = state.artists.findIndex(obj => obj.id === id)
      state.artists[idx] = action.payload
      return { ...state, artists: state.artists.slice() }

    case 'DELETE_SAVED_ARTIST':
      id = action.payload.id
      idx = state.artists.findIndex(obj => obj.id === id)
      state.artists.splice(idx, 1)
      return { ...state, artists: state.artists.slice() }

    default:
      return state
  }
}
