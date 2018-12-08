import fetch from 'isomorphic-fetch';

const songkick_key = process.env.REACT_APP_SONGKICK_API_KEY
const bandsintown_app_id = process.env.REACT_APP_BANDSINTOWN_APP_ID
const base_url = process.env.REACT_APP_BASE_URL

export function fetchByArtist(artist_name) {
  return (dispatch) => {

    dispatch({type: 'LOADING_SONGKICK_ARTISTS'})

    // grab songkick artists
    fetch(`https://api.songkick.com/api/3.0/search/artists.json?apikey=${songkick_key}&query=${artist_name}`)
      .then(response => response.json())
      .then(artists => {
                        let obj = artists.resultsPage.results
                        if (Object.keys(obj).length !== 0){
                          const results = artists.resultsPage.results.artist.map(artist => {
                            return {id: artist.id, name: artist.displayName, touringUntil: artist.onTourUntil}
                          })
                          dispatch({type: 'FETCH_SONGKICK_ARTISTS', payload: results})
                        }
                      })

    dispatch({type: 'LOADING_BANDSINTOWN_ARTISTS'})

    // grab bandsintown artists
    fetch(`https://rest.bandsintown.com/artists/${artist_name}?app_id=${bandsintown_app_id}`)
      .then(response => response.json())
      .then(artist => {
        const result = {id: artist.id, name: artist.name, eventCount: artist.upcoming_event_count}
        dispatch({type: 'FETCH_BANDSINTOWN_ARTISTS', payload: result})
      })

    } // end dispatch
} // end fetchByArtist

export function getSongkickShows(artist_id){
  return (dispatch) => {
    dispatch({type: 'LOADING_SONGKICK_SHOWS'})
    fetch(`https://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${songkick_key}`)
      .then(response => response.json())
      .then(shows => {
          const showsData = shows.resultsPage.results.event.map(show => { return { artist_id: artist_id,
                                                                                   name: show.displayName,
                                                                                   location: show.location.city,
                                                                                   venue: show.venue.displayName,
                                                                                   date: show.start.date,
                                                                                   time: show.start.time }
                                                                                 })
            dispatch({ type: 'FETCH_SONGKICK_SHOWS', payload: showsData })
      })
  }
}

export function getBandsintownShows(name, artist_id){
  return (dispatch) => {
    dispatch({type: 'LOADING_BANDSINTOWN_SHOWS'})
    fetch(`https://rest.bandsintown.com/artists/${name}/events?app_id=${bandsintown_app_id}`)
      .then(response => response.json())
      .then(shows => {
          const showData = shows.map((show) => { return { artist_id: artist_id,
                                                          name: show.description,
                                                          location: show.venue.city,
                                                          venue: show.venue.name,
                                                          date: show.datetime.substring(0, 10),
                                                          time: show.datetime.substring(11, 19) }
                                                        })
        dispatch({type: 'FETCH_BANDSINTOWN_SHOWS', payload: showData})
      })
  }
}

export function signupThroughApi(email, password){
  let data = {email: email, password: password}
  return dispatch => {
    dispatch({type: 'LOADING_USERS'})
    fetch(`http://${base_url}/users`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'FETCH_USERS', payload: {userCreated: user.userCreated, email: user.email, id: user.id }}))
  }
}

export function loginThroughApi(email, password){
  let data = {email: email, password: password}
  return dispatch => {
    dispatch({type: 'LOADING_USERS'})
    fetch(`http://${base_url}/apilogin`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(user => dispatch({type: 'FETCH_USERS', payload: {userFound: user.userFound, email: user.email, id: user.id }}))
  }
}

export function createSavedArtist(name, user_id){
  let data = { name: name }
  return dispatch => {
    dispatch({type: 'LOADING_SAVED_ARTISTS'})
    fetch(`http://${base_url}/users/${user_id}/artists`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(artist => dispatch({type: 'ADD_SAVED_ARTIST', payload: artist }))
  }
}

export function getSavedArtists(user_id){
  return dispatch => {
    dispatch({type: 'LOADING_SAVED_ARTISTS'})
    fetch(`http://${base_url}/users/${user_id}/artists`)
        .then(response => response.json())
        .then(artists => {
          const artistData = artists.map((artist) => {
            return { name: artist.name, id: artist.id, likes: artist.likes }
          } )
          dispatch({type: 'FETCH_SAVED_ARTISTS', payload: artistData})
        })
  }
}

export function likeAction(artist_id, user_id){
  let data = { artist_id: artist_id, user_id: user_id}
  return dispatch => {
    dispatch({type: 'LOADING_SAVED_ARTISTS'})
    fetch(`http://${base_url}/likes`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(artists => {
          const artistData = artists.map((artist) => {
            return { name: artist.name, id: artist.id, likes: artist.likes }
          } )
          dispatch({type: 'FETCH_SAVED_ARTISTS', payload: artistData})
        })
  }
}
