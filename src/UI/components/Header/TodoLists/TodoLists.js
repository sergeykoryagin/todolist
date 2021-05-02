import React from 'react';
import Tab from './Tab';
import NewTodoList from './NewTodoList';

const TodoLists = ({todolists, dispatch}) => {
  const tabs = todolists.map(t => <Tab key={t.id} id={t.id} title={t.title} dispatch={dispatch}/>);
  return (
    <>
      {tabs}
      <NewTodoList dispatch={dispatch}/>
    </>
  );
};

export default TodoLists;