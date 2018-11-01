import { combineReducers } from 'redux'
import usersReducer from './users_reducer'

const rootReducer = combineReducers({users: artistsReducer })

export default rootReducer
