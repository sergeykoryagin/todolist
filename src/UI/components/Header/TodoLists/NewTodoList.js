import React, {useState} from 'react';
import {addNewTodoList} from '../../../../redux/todoListsReducer';

const NewTodoList = ({dispatch}) => {
  const [editMode, setEditMode] = useState(false);
  const enableEditMode = () => {
    setEditMode(true);
  };
  const disableEditMode = () => {
    setEditMode(false);
  };


  const [todoTitle, setTodoTitle] = useState('');
  const handleTodoTitleChange = (e) => {
    setTodoTitle(e.currentTarget.value);
  };


  const [submiting, setSubmiting] = useState(false);
  const handleSaveButtonClick = () => {
    setSubmiting(true);
    dispatch(addNewTodoList(todoTitle))
      .then(setSubmiting(false))
      .then(disableEditMode());
  };


  return (
    <>
      {
        !editMode
          ? <button onClick={enableEditMode}>+</button>
          : <div>
            <input type={'text'} value={todoTitle} onChange={handleTodoTitleChange} onBlur={disableEditMode}/>
            <button onClick={handleSaveButtonClick} disabled={submiting}>save</button>
          </div>
      }
    </>
  );
};

export default NewTodoList;