import { LOAD_USER } from '../actions/types';

const INITIAL_STATE = {
  user: {
    id: null,
    username: null,
    days_left: 0
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOAD_USER: {
      return {
        ...state, user: action.payload
      };
    }
    default:
      return state;
  }
};