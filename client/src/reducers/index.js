import { combineReducers } from 'redux'
import songkickArtistsReducer from './songkick_artists_reducer'
import songkickShowsReducer from './songkick_shows_reducer'

const rootReducer = combineReducers({songkickArtistsReducer: songkickArtistsReducer, songkickShowsReducer: songkickShowsReducer })

export default rootReducer
