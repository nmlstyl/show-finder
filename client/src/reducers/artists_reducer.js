export default function artistsReducer(state = {artists: [], shows: [] }, action) {
  switch (action.type) {
    case 'FETCH_ARTIST':
      return {artists: action.payload, shows: state.shows}

    case 'FETCH_SHOWS':
      return {artists: state.artists, shows: action.payload}

    default:
      return state;
  }
};
