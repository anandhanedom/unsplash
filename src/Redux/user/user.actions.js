import axios from 'axios';
import { UserActionTypes } from './user.types';

const setuser = () => {
  return { type: UserActionTypes.SET_USER };
};

const signout = () => {
  return { type: UserActionTypes.SIGN_OUT };
};

export const signIn = (userInfo) => (dispatch) => {
  axios.post('signin', userInfo).then((res) => {
    localStorage.setItem('token', res.data.token);
    dispatch(setuser());
  });
};

export const signUp = (userInfo) => (dispatch) => {
  axios
    .post('register', userInfo)
    .then((res) => {
      localStorage.setItem('token', res.data.accessToken);
    })
    .then(() => {
      dispatch(setuser());
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signOut = () => (dispatch) => {
  localStorage.clear();
  dispatch(signout());
};
