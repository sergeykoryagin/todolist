import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, Provider, useSelector} from 'react-redux';
import store from '../redux/store';
import {initializeApp} from '../redux/appReducer';
import LoginForm from './components/Login/Login';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

const TodoApp = () => {
  const initialized = useSelector(state => state.app.initialized);
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [initialized]);

  if (!initialized) {
    return <div>LOADING...</div>;
  }

  return (
    <>
      <Header isAuth={isAuth} dispatch={dispatch}/>
      {!isAuth
        ? <LoginForm dispatch={dispatch}/>
        : <TodoList dispatch={dispatch}/>
      }
    </>
  );
};


const App = () => (
  <Provider store={store}>
    <TodoApp/>
  </Provider>
);

export default App;
