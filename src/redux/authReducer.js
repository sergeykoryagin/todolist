import {AuthAPI} from '../api/api';
// actions
export const SET_AUTH_DATA = 'todo-list/auth/SET_AUTH_DATA';

//init state
const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_AUTH_DATA:
    return {
      id: action.id,
      email: action.email,
      login: action.login,
      isAuth: action.isAuth
    };
  default:
    return state;
  }
}

//action creators
export function setAuthUserData(id, email, login, isAuth) {
  return {
    type: SET_AUTH_DATA,
    id, email, login, isAuth
  };
}

//thunks
export function authMe() {
  return async dispatch => {
    const response = await AuthAPI.me();
    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  };
}

export function login(email, password, rememberMe) {
  return async dispatch => {
    const response = await AuthAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      dispatch(authMe());
    }
  };
}

export function logout() {
  return async dispatch => {
    const response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
}
