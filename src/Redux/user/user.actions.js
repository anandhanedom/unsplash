import { HeaderActionTypes } from './user.types';
import axios from 'axios';

const setUser = (payload) => {
  return {
    type: HeaderActionTypes.SET_USER,
    payload,
  };
};

export const logUserOut = () => ({ type: HeaderActionTypes.LOG_OUT });

export const fetchUser = (userInfo) => {
  return function (dispatch) {
    axios.post('http://localhost:3000/login', userInfo).then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch(setUser(res.data.user));
    });
  };
};

export const signUserUp = (userInfo) => {
  return function (dispatch) {
    axios.post('http://localhost:3000/users', userInfo).then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch(setUser(res.data.user));
    });
  };
};

export const autoLogin = () => {
  return function (dispatch) {
    axios.post('http://localhost:3000/auto_login').then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch(setUser(res.data.user));
    });
  };
};
