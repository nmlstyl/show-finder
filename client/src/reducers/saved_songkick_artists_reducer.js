export default function savedSongkickArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SAVED_SONGKICK_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SAVED_SONGKICK_ARTISTS':
      debugger
      const artists = action.payload
      return { ...state, artists: [...state.artists, artists] }

    case 'ADD_SAVED_SONGKICK_ARTIST':
      debugger
      const info = action.payload
      const artist = Object.assign({}, {name: info.name, id: info.id, user_id: info.user_id, songkick_id: info.songkick_id})
      return { ...state, artists: [...state.artists, artist] }

    default:
      return state
  }
}
