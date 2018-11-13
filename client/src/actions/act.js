import fetch from 'isomorphic-fetch';

const songkick_key = process.env.REACT_APP_SONGKICK_API_KEY
const bandsintown_app_id = process.env.REACT_APP_BANDSINTOWN_APP_ID

export function fetchByArtist(artist_name) {
  return (dispatch) => {

    dispatch({type: 'LOADING_SONGKICK_ARTISTS'})

    // grab songkick artists
    fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${songkick_key}&query=${artist_name}`)
      .then(response => response.json())
      .then(artists => {
                        let obj = artists.resultsPage.results
                        if (Object.keys(obj).length !== 0){
                          const results = artists.resultsPage.results.artist.map(artist => { return Object.assign({}, {id: artist.id, name: artist.displayName, touringUntil: artist.onTourUntil})})
                          dispatch({type: 'FETCH_SONGKICK_ARTISTS', payload: results})
                        }
                      })

    dispatch({type: 'LOADING_BANDSINTOWN_ARTISTS'})

    // grab bandsintown artists
    fetch(`https://rest.bandsintown.com/artists/${artist_name}?app_id=${bandsintown_app_id}`)
      .then(response => response.json())
      .then(artist => {
        const result = Object.assign({}, {id: artist.id, name: artist.name, eventCount: artist.upcoming_event_count})
        dispatch({type: 'FETCH_BANDSINTOWN_ARTISTS', payload: result})
      })

    } // end dispatch
} // end fetchByArtist

export function getSongkickShows(id){
  return (dispatch) => {
    dispatch({type: 'LOADING_SONGKICK_SHOWS'})
    fetch(`https://api.songkick.com/api/3.0/artists/${id}/calendar.json?apikey=${songkick_key}`)
      .then(response => response.json())
      .then(shows => dispatch({type: 'FETCH_SONGKICK_SHOWS', payload: shows.resultsPage.results.event}) )
  }
}

export function getBandsintownShows(name){
  return (dispatch) => {
    dispatch({type: 'LOADING_BANDSINTOWN_SHOWS'})
    fetch(`https://rest.bandsintown.com/artists/${name}/events?app_id=${bandsintown_app_id}`)
      .then(response => response.json())
      .then(shows => dispatch({type: 'FETCH_BANDSINTOWN_SHOWS', payload: shows}))
  }
}

export function signupThroughApi(email, password){
  return dispatch => {
    dispatch({type: 'LOADING_USERS'})
    fetch(`http://api.localhost:3001/users?email=${email}&password=${password}`, {
           method: 'POST'
        })
        .then(results => results.json())
        .then(user => dispatch({type: 'FETCH_USERS', payload: Object.assign({}, {email: user.email, id: user.id }) }) )

  }
}
