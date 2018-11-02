export default function showsReducer(state = {shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SHOWS':
      const showsData = action.payload.map(show => show.displayName)
      return {loading: false, shows: showsData}

    default:
      return state
  }
}
