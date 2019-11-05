import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR } from '../constants/Login';
import { parse } from '../utils';

const fakeLoginRequest = user =>
  new Promise((resolve, reject) => {
    if (user.username === 'admin' && user.password === '12345') {
      localStorage.setItem('isLoggedIn', true);
      resolve(user);
    } else {
      localStorage.setItem('isLoggedIn', false);
      reject('Nu such user');
    }
  });

export const doLogin = (user, history) => async dispatch => {
  try {
    const userResponse = await fakeLoginRequest(user);
    dispatch({
      type: AUTH_LOGIN,
      payload: {
        user: userResponse,
        isLoggedIn: parse(localStorage.getItem('isLoggedIn')),
      },
    });
    history.push('/');
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      error: true,
      payload: new Error('Ошибка авторизации'),
    });
    // alert(error);
  }
};

export const doLogout = () => {
  return dispatch => {
    localStorage.setItem('isLoggedIn', false);
    dispatch({
      type: AUTH_LOGOUT,
      payload: { isLoggedIn: parse(localStorage.getItem('isLoggedIn')) },
    });
  };
};
