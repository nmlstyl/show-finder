export default function bandsintownArtistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_BANDSINTOWN_ARTISTS':
      return { ...state, loading: true}

    case 'FETCH_BANDSINTOWN_ARTISTS':
      return { artists: [action.payload], loading: false}

    default:
      return state
  }
}
