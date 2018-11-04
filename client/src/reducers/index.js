import { combineReducers } from 'redux'
import songkickArtistsReducer from './songkick_artists_reducer'
import songkickShowsReducer from './songkick_shows_reducer'
import bandsintownArtistsReducer from './bandsintown_artists_reducer'

const rootReducer = combineReducers({songkickArtistsReducer: songkickArtistsReducer,
                                     songkickShowsReducer: songkickShowsReducer,
                                     bandsintownArtistsReducer: bandsintownArtistsReducer})

export default rootReducer
