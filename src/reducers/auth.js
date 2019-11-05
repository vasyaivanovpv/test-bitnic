import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR } from '../constants/Login';
import { parse } from '../utils';

const initialState = {
  user: '',
  isLoggedIn: parse(localStorage.getItem('isLoggedIn')) || false,
  error: '',
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user,
        error: '',
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
