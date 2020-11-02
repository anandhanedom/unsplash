import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  loggedIn: false,
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        loggedIn: false,
      };
    case UserActionTypes.SIGN_OUT:
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
