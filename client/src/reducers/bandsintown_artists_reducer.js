export default function bandsintownArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_BANDSINTOWN_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_BANDSINTOWN_ARTISTS':
      debugger
      return {loading: false, artists: [action.payload]}

    default:
      return state
  }
}
