import fetch from 'isomorphic-fetch';
import { fetchShows } from './fetch_shows'

export function fetchByArtist(artist_name) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTIST'})
    return fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${ENV['SONGKICK_API_KEY']}&query=${artist_name}`)
      .then(response => response.json())
      .then(artist => {
                        dispatch({type: 'FETCH_ARTIST', payload: artist.resultsPage.results.artist[0].displayName})
                        fetchShows(artist.resultsPage.results.artist[0].id)
                      })
    }
}
