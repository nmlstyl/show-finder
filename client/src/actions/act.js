import fetch from 'isomorphic-fetch';

const key = process.env.REACT_APP_SONGKICK_API_KEY


export function fetchByArtist(artist_name) {
  return (dispatch) => {
    dispatch({type: 'LOADING_ARTISTS'})
    fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artist_name}`)
      .then(response => response.json())
      .then(artists => {
                        let obj = artists.resultsPage.results
                        if (Object.keys(obj).length !== 0){
                          const results = artists.resultsPage.results.artist.map(artist => { return Object.assign({}, {id: artist.id, name: artist.displayName, touringUntil: artist.onTourUntil})})
                          dispatch({type: 'FETCH_ARTISTS', payload: results})
                        }
                      })
    }
}

export function getShows(id){
  return (dispatch) => {
    dispatch({type: 'LOADING_SHOWS'})
    fetch(`https://api.songkick.com/api/3.0/artists/${id}/calendar.json?apikey=${key}`)
      .then(response => response.json())
      .then(shows => dispatch({type: 'FETCH_SHOWS', payload: shows.resultsPage.results.event}) )
  }
}
