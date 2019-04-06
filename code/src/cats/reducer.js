import { POPULATE_CATS } from './constants';

const INITIAL_STATE = {
  list: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_CATS:
      return {
        ...state,
        list: action.data

      }

    default:
      return state;
  };
}

