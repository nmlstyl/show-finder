export default function artistsReducer(state = {artists: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_ARTISTS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_ARTISTS':
      return {loading: false, artists: action.payload}

    default:
      return state
  }
}
