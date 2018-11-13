export default function usersReducer(state = {users: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_USERS':
      return Object.assign({}, state, {loading: true})

    case 'FETCH_USERS':
      return {loading: false, users: action.payload}

    default:
      return state
  }
}
