import { HeaderActionTypes } from './user.types';

const INITIAL_STATE = {
  loggedIn: false,
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.SET_USER:
      return {
        ...state,
        user: { ...action.payload },
        loggedIn: true,
      };

    case HeaderActionTypes.LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        loggedIn: false,
        user: {},
      };

    default:
      return state;
  }
};

export default userReducer;
