import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': '460ad04f-68cd-409f-95b1-b608f717639a'
  }
});

export const AuthAPI = {
  me: () => {
    return instance.get('auth/me');
  },
  login: (email, password, rememberMe, captcha = true) => {
    return instance.post('auth/login', {
      email, password, rememberMe, captcha
    });
  },
  logout: () => {
    return instance.delete('auth/login');
  }
};

export const TodoListsAPI = {
  getTodoLists: () => {
    return instance.get('todo-lists');
  },
  addTodoList: title => {
    return instance.post('todo-lists', {
      title
    });
  },
  updateTodoListTitle: (todolistId, title) => {
    return instance.put(`todo-lists/${todolistId}`, {
      title
    });
  },
  deleteTodoList: todolistId => {
    return instance.delete(`todo-lists/${todolistId}`);
  },
  reorderTodoList: (todolistId, putAfterItemId = null) => {
    return instance.put(`todo-lists/${todolistId}`, {
      putAfterItemId
    });
  }
};

export const TodoAPI = {
  getTodos: (todolistId, count = 10, page = 1) => {
    return instance.get(`todo-lists/${todolistId}?count=${count}&page=${page}`);
  },
  addTodo: (todolistId, title) => {
    return instance.post(`todo-lists/${todolistId}`, {
      title
    });
  },
  updateTodo: (todolistId, taskId, taskProps) => {
    return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, taskProps);
  },
  deleteTodo: (todolistId, taskId) => {
    return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`);
  },
  reorderTodo: (todolistId, taskId, putAfterItemId = null) => {
    return instance.put(`todo-lists/${todolistId}/tasks/${taskId}/reorder`, {
      putAfterItemId
    });
  }
};