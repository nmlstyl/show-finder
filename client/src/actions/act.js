import fetch from 'isomorphic-fetch';

const key = process.env.REACT_APP_SONGKICK_API_KEY

export function fetchByArtist(artist_name) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTIST'})
    return fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artist_name}`)
      .then(response => response.json())
      .then(artist => {
                        dispatch({type: 'FETCH_ARTIST', payload: artist.resultsPage.results.artist[0].displayName})
                        fetch(`https://api.songkick.com/api/3.0/artists/${artist.resultsPage.results.artist[0].id}/calendar.json?apikey=${key}`)
                          .then(response => response.json())
                          .then(shows => dispatch({type: 'FETCH_SHOWS', payload: shows}) )
                        })
    }
}
