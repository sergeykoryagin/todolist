import React from 'react';
import NewTodo from './NewTodo';
import Paginator from './Paginator';

const Todo = ({title}) => {
  return <div>{title}</div>;
};


const Todos = ({dispatch, ...props}) => {
  const tasks = props.todos.map(t => <Todo dispatch={dispatch} key={t.id} title={t.title}/>);
  return (
    <>
      {tasks}
      <NewTodo dispatch={dispatch} />
      <Paginator dispatch={dispatch} page={props.page} totalCount={props.totalCount}/>
    </>
  );
};

export default Todos;