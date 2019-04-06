import { SHOW_NOTIFICATIONS, HIDE_NOTIFICATIONS } from './constants';

const INITIAL_STATE = {
  notifications: {
    open: false,
    message: ''
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATIONS:
      return {
        ...state,
        notifications: {
          open: true,
          message: action.message
        }
      };
    case HIDE_NOTIFICATIONS:
    return {
      ...state,
      notifications: {
        open: false,
        message: ''
      }
    };
    default:
      return state;
  }
}
