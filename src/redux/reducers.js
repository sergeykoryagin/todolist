import {combineReducers} from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import todoListsReducer from './todoListsReducer';
import todosReducer from './todosReducer';


const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  todoLists: todoListsReducer,
  todos: todosReducer
});

export default reducers;