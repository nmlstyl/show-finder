export default function artistsReducer(state = { loading: false, artists: [], shows: [] }, action) {
  switch (action.type) {
    case 'FETCH_ARTIST':
      return {loading: false, artists: action.payload}

    case 'LOADING_ARTIST':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SHOWS':
      debugger
      return {loading: false, shows: action.payload}

    case 'LOADING_SHOWS':
      return Object.assign({}, state, {loading: true})

    default:
      return state;
  }
};
