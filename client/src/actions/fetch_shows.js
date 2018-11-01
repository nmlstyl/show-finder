import fetch from 'isomorphic-fetch';

export function fetchShows(artist_id) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SHOWS'})
    return fetch(`https://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${ENV['SONGKICK_API_KEY']}`)
      .then(response => response.json())
      .then(artist => dispatch({type: 'FETCH_ARTIST', payload: shows}) )
    }
}
