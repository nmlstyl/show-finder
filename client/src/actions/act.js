import fetch from 'isomorphic-fetch';

const songkick_key = process.env.REACT_APP_SONGKICK_API_KEY
const bandsintown_app_id = process.env.REACT_APP_BANDSINTOWN_APP_ID

export function fetchByArtist(artist_name) {
  return (dispatch) => {

    dispatch({type: 'LOADING_ARTISTS'})

    // grab songkick artists
    fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${songkick_key}&query=${artist_name}`)
      .then(response => response.json())
      .then(artists => {
                        let obj = artists.resultsPage.results
                        if (Object.keys(obj).length !== 0){
                          const results = artists.resultsPage.results.artist.map(artist => { return Object.assign({}, {id: artist.id, name: artist.displayName, touringUntil: artist.onTourUntil})})
                          dispatch({type: 'FETCH_ARTISTS', payload: results})
                        }
                      })

    // grab bandsintown artists
    fetch(`https://rest.bandsintown.com/artists/${artist_name}?app_id=${bandsintown_app_id}`)
      .then(response => response.json())
      .then(artist => {
        debugger
      })

    }
}

export function getShows(id){
  return (dispatch) => {
    dispatch({type: 'LOADING_SHOWS'})
    fetch(`https://api.songkick.com/api/3.0/artists/${id}/calendar.json?apikey=${songkick_key}`)
      .then(response => response.json())
      .then(shows => dispatch({type: 'FETCH_SHOWS', payload: shows.resultsPage.results.event}) )
  }
}
