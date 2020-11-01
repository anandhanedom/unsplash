import { UserActionTypes } from './user.types';

const defaultState = {
  loggedIn: false,
  user: {},
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        loggedIn: true,
      };
    case UserActionTypes.SIGN_OUT:
      localStorage.clear();
      return {
        loggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default userReducer;
