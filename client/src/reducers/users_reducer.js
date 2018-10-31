export default function usersReducer(state = { users: [] }, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return state;

    default:
      return state;
  }
};
