import { createContext } from 'react';

export const AuthContext = createContext();

export const initialState = {
  loading: false,
  error: null,
  user: null,
  isAuth: false,
  isAdmin: false,
  token: localStorage.getItem('token') || '',
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.user,
        isAdmin: action.payload.user.isAdmin,
        token: action.payload.token,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        isAuth: true,
        loading: false,
        isAdmin: action.payload.user.isAdmin,
        user: action.payload.user,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: {},
        token: '',
      };
    case 'GET_USER_FAIL':
    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: {},
        token: '',
      };
    default:
      return state;
  }
};
