//actions
import {TodoListsAPI} from '../api/api';

export const SET_TODO_LISTS = 'todo-list/todoLists/SET_TODO_LISTS';
export const UPDATE_TODO_LIST_TITLE = 'todo-list/todoLists/UPDATE_TODO_LIST_TITLE';
export const DELETE_TODO_LIST = 'todo-list/todoLists/DELETE_TODO_LIST';


//init state
const initialState = {
  todolists: []
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_TODO_LISTS:
    return {
      todolists: action.todolist
    };
  case UPDATE_TODO_LIST_TITLE:
    return {
      todolists: state.todolists.map(l => {
        if (l.id === action.todolistId) {
          return {
            ...l,
            title: action.title
          };
        }
        return l;
      })
    };
  case DELETE_TODO_LIST:
    return {
      todolists: state.todolists.filter(l => l.id !== action.todolistId)
    };
  default:
    return state;
  }
}

//action creators
export function setTodoLists(todolists) {
  return {
    type: SET_TODO_LISTS,
    todolists
  };
}

export function updateTodoListTitle(todolistId, title) {
  return {
    type: UPDATE_TODO_LIST_TITLE,
    todolistId,
    title
  };
}

export function deleteTodoListFromState(todolistId) {
  return {
    type: DELETE_TODO_LIST,
    todolistId
  };
}


//thunks
export function getTodoLists() {
  return async dispatch => {
    const response = await TodoListsAPI.getTodoLists();
    dispatch(setTodoLists(response.items));
  };
}

export function addNewTodoList(title) {
  return async dispatch => {
    const response = await TodoListsAPI.addTodoList(title);
    if (response.resultCode === 0) {
      dispatch(getTodoLists());
    }
  };
}

export function updateTodoList(todolistId, title) {
  return async dispatch => {
    const response = await TodoListsAPI.updateTodoListTitle(todolistId, title);
    dispatch(updateTodoListTitle(todolistId, response.title));
  };
}

export function deleteTodoList(todolistId) {
  return async dispatch => {
    const response = await TodoListsAPI.deleteTodoList(todolistId);
    if (response.resultCode === 0) {
      dispatch(deleteTodoListFromState(todolistId));
    }
  };
}

export function reorderTodoList(todolistId, putAfterItemId) {
  return async dispatch => {
    await TodoListsAPI.reorderTodoList(todolistId, putAfterItemId);
    dispatch(getTodoLists());
  };
}