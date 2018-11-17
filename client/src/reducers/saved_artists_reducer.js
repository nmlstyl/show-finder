export default function savedArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SAVED_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SAVED_ARTISTS':
      const artists = action.payload
      return { ...state, artists: artists }

    case 'ADD_SAVED_ARTIST':
      const artist = Object.assign({}, {name: action.payload.name, id: action.payload.id})
      return { ...state, artists: [...state.artists, artist] }

    default:
      return state
  }
}
