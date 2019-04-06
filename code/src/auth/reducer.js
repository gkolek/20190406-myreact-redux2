import { LOGIN, LOGOUT } from './constants';

const INITIAL_STATE = {
  isAuthorized: false,
  user: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthorized: true,
        user: action.user
      }
    case LOGOUT:
      return {
        ...state,
        isAuthorized: false,
        user: {}
      }
    default:
      return state;
  };
}

