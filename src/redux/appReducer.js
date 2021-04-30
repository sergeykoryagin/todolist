//actions
import {authMe} from './authReducer';

const INITIALIZE_SUCCESS = 'todo-lists/app/INITIALIZE_SUCCESS';

//initial state
const initialState = {
  initialized: false
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case INITIALIZE_SUCCESS:
    return {
      ...state,
      initialized: true
    };
  default:
    return state;
  }
}

//action creators
export function initializeSuccess() {
  return {
    type: INITIALIZE_SUCCESS
  };
}

//thunks
export function initializeApp() {
  return async dispatch => {
    await dispatch(authMe());
    dispatch(initializeSuccess());
  };
}
