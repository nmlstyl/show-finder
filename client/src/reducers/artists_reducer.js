export default function artistsReducer(state = { artists: [], shows: [] }, action) {
  switch (action.type) {
    case 'FETCH_ARTIST':
      return state;

    case 'LOADING_ARTIST':
      return state;

    case 'FETCH_SHOWS':
      return state;

    case 'LOADING_SHOWS':
      return state;

    default:
      return state;
  }
};
