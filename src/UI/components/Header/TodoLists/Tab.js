import React from 'react';
import {getTodos} from '../../../../redux/todosReducer';

// eslint-disable-next-line react/prop-types
const Tab = ({dispatch, title, id}) => {
  return (
    <button onClick={() => dispatch(getTodos(id))}>{title}</button>
  );
};

export default Tab;