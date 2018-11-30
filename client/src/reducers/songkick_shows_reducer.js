export default function songkickShowsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_SONGKICK_SHOWS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SONGKICK_SHOWS':
      return {loading: false, shows: action.payload}

    default:
      return state
  }
}
