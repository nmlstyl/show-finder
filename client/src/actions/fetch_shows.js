
import fetch from 'isomorphic-fetch';

export function fetchByArtist(artist_name) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SHOWS'})
    return fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${ENV['SONGKICK_API_KEY']}&query=${artist_name}`)
      .then(response => response.json())
      .then(shows => dispatch({type: 'FETCH_SHOWS', payload: cats.shows}) )
    }
}
