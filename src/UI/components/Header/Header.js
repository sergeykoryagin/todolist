import React from 'react';
import TodoLists from './TodoLists/TodoLists';
import Logout from './Logout';
import {useSelector} from 'react-redux';


const Header = ({isAuth, dispatch}) => {
  if (!isAuth) {
    return <div>todo-list</div>;
  }

  const todoLists = useSelector(state => state.todoLists.todolists);

  return (
    <>
      <TodoLists todolists={todoLists} dispatch={dispatch}/>
      <Logout dispatch={dispatch}/>
    </>
  );
};

export default Header;