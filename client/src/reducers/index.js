import { combineReducers } from 'redux'
import artistsReducer from './artists_reducer'

const rootReducer = combineReducers({artists: artistsReducer })

export default rootReducer
