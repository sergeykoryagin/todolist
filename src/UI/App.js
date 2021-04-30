import React, {useEffect} from 'react';
import './App.css';
import {connect, Provider} from 'react-redux';
import store from '../redux/store';
import {initializeApp} from '../redux/appReducer';
import TodoList from './TodoList';
import LoginForm from './Login/Login';

const mapStateToProps = state => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
});


const TodoApp = connect(mapStateToProps, {initializeApp})(
  ({initialized, initializeApp, isAuth}) => {
    useEffect(() => {
      initializeApp();
    }, [initialized]);

    if (!initialized) {
      return <div>LOADING...</div>;
    }
    return (
      <>
        {!isAuth
          ? <LoginForm/>
          : <TodoList/>
        }
      </>
    );
  }
);


const App = () => (
  <Provider store={store}>
    <TodoApp/>
  </Provider>
);

export default App;
