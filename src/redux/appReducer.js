//actions
const INITIALIZE = 'todo-lists/app/INITIALIZE';

//initial state
const initialState = {
  initialized: false
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case INITIALIZE:
    return {
      ...state,
      initialized: true
    };
  default:
    return state;
  }
}

//action creators
export function initialize() {
  return {
    type: INITIALIZE
  };
}