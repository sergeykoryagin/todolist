import React from 'react';
import {useFormik} from 'formik';
import {login} from '../../redux/authReducer';
import {connect} from 'react-redux';

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    onSubmit: values => {
      // eslint-disable-next-line react/prop-types
      props.login(values.email, values.password, values.rememberMe);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor={'email'}>email</label>
      <input
        id={'email'}
        name={'email'}
        type={'email'}
        {...formik.getFieldProps('email')}
      />

      <label htmlFor={'password'}>password</label>
      <input
        id={'password'}
        name={'password'}
        type={'password'}
        {...formik.getFieldProps('password')}
      />

      <label htmlFor={'rememberMe'}>remember me</label>
      <input
        id={'rememberMe'}
        name={'rememberMe'}
        type={'checkbox'}
        {...formik.getFieldProps('rememberMe')}
      />

      <button>sign in</button>
    </form>
  );
};


export default connect(null, {login})(LoginForm);