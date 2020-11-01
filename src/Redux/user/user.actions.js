import axios from 'axios';
import { UserActionTypes } from './user.types';

const setUser = () => ({ type: UserActionTypes.SET_USER });

export const signOut = () => ({ type: UserActionTypes.SIGN_OUT });

// Methods

export const signIn = (userInfo) => (dispatch) => {
  axios.post('http://localhost:3000/signin', userInfo).then((res) => {
    //       200 OK
    // {
    //   "accessToken": "xxx.xxx.xxx"
    // }
    localStorage.setItem('token', res.data.token);
    dispatch(setUser());
  });
};

export const signUp = (userInfo) => (dispatch) => {
  axios.post('http://localhost:3000/register', userInfo).then((res) => {
    //     201 Created
    // {
    //   "accessToken": "xxx.xxx.xxx"
    // }
    localStorage.setItem('token', res.data.accessToken);
    dispatch(setUser());
  });
};
