import { combineReducers } from 'redux'
import artistsReducer from './artists_reducer'

const rootReducer = combineReducers({artistsReducer: artistsReducer })

export default rootReducer
