import { combineReducers } from 'redux'
import artistsReducer from './artistsReducer'
import showsReducer from './showsReducer'

const rootReducer = combineReducers({artistsReducer: artistsReducer, showsReducer: showsReducer })

export default rootReducer
