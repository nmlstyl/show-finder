export default function artistsReducer(state = { loading: false, artists: [], shows: [] }, action) {
  switch (action.type) {
    case 'FETCH_ARTIST':
      console.log(state)
      return {loading: false, artists: action.payload}

    case 'LOADING_ARTIST':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_SHOWS':
      return state;

    case 'LOADING_SHOWS':
      return state;

    default:
      return state;
  }
};
