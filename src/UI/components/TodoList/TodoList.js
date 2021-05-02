import React from 'react';
import Todos from './Todos/Todos';
import {useSelector} from 'react-redux';
import Settings from './Settings';

// eslint-disable-next-line react/prop-types
const TodoList = ({dispatch}) => {
  const todolistId = useSelector(state => state.todos.todolistId);
  const todos = useSelector(state => state.todos.todos);
  const title = useSelector(state => state.todos.title);
  const page = useSelector(state => state.todos.page);
  const totalCount = useSelector(state => state.todos.totalCount);


  return (
    <>
      <h1>{title}</h1>
      <Todos dispatch={dispatch} todos={todos} todolistId={todolistId} page={page} totalCount={totalCount}/>
      <Settings/>
    </>
  );
};

export default TodoList;