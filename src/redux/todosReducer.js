//actions
import {TodoAPI} from '../api/api';

export const SET_TODOS = 'todo-list/todos/SET_TODOS';
export const UPDATE_TODO = 'todo-list/todos/UPDATE_TODO';
export const DELETE_TODO = 'todo-list/todos/DELETE_TODO';

//init state
const initialState = {
  todolistId: null,
  totalCount: 0,
  page: 1,
  todos: []
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
  case SET_TODOS:
    return {
      todolistId: action.todolistId,
      totalCount: action.totalCount,
      todos: action.todos,
    };
  case UPDATE_TODO:
    return {
      ...state,
      todos: state.todos.map(t => {
        if (t.id === action.taskId) {
          return {
            ...t,
            ...action.taskProps
          };
        }
      })
    };
  case DELETE_TODO:
    return {
      ...state,
      todos: state.todos.filter(t => t !== action.taskId)
    };
  default:
    return state;
  }
}

//action creators
export function setTodos(todolistId, todos, totalCount, page) {
  return {
    type: SET_TODOS,
    todolistId, todos, totalCount, page
  };
}

export function updateTodoInState(taskId, taskProps) {
  return {
    type: UPDATE_TODO,
    taskId, taskProps
  };
}

export function deleteTodoFromState(taskId) {
  return {
    type: DELETE_TODO,
    taskId
  };
}


//thunks
export function getTodos(todolistId, count, page) {
  return async dispatch => {
    const response = await TodoAPI.getTodos(todolistId, count, page);
    dispatch(setTodos(todolistId, response.items, response.totalCount, page));
  };
}

export function addTodo(todolistId, title) {
  return async dispatch => {
    await TodoAPI.addTodo(todolistId, title);
    dispatch(getTodos(todolistId));
  };
}

export function updateTodo(todolistId, taskId, taskProps) {
  return async dispatch => {
    const response = await TodoAPI.updateTodo(todolistId, taskId, taskProps);
    if (response.resultCode === 0) {
      dispatch(updateTodoInState(taskId, taskProps));
    }
  };
}

export function deleteTodo(todolistId, taskId) {
  return async dispatch => {
    const response = await TodoAPI.deleteTodo(todolistId, taskId);
    if (response.resultCode === 0) {
      dispatch(deleteTodoFromState(taskId));
    }
  };
}

export function reorderTodo(todolistId, taskId, putAfterItemId) {
  return async dispatch => {
    const response = await TodoAPI.reorderTodo(todolistId, taskId, putAfterItemId);
    if (response.resultCode === 0) {
      dispatch(getTodos(todolistId));
    }
  };
}
