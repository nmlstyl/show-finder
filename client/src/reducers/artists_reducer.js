export default function artistsReducer(state = {artists: [], shows: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_ARTISTS':
      return {loading: false, artists: action.payload}

    case 'FETCH_SHOWS':
      const showsData = action.payload.map(show => show.displayName)
      return {loading: false, shows: showsData}

    default:
      return state;
  }
};
