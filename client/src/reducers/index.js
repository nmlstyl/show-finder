import { combineReducers } from 'redux'
import songkickArtistsReducer from './songkick_artists_reducer'
import songkickShowsReducer from './songkick_shows_reducer'
import bandsintownArtistsReducer from './bandsintown_artists_reducer'
import bandsintownShowsReducer from './bandsintown_shows_reducer'
import usersReducer from './users_reducer'
import savedArtistsReducer from './saved_artists_reducer'


const rootReducer = combineReducers({songkickArtistsReducer: songkickArtistsReducer,
                                     songkickShowsReducer: songkickShowsReducer,
                                     bandsintownArtistsReducer: bandsintownArtistsReducer,
                                     bandsintownShowsReducer: bandsintownShowsReducer,
                                     usersReducer: usersReducer,
                                     savedArtistsReducer: savedArtistsReducer
                                   })

export default rootReducer
