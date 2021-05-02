import React from 'react';
import {useFormik} from 'formik';
import {login} from '../../../redux/authReducer';
import * as Yup from 'yup';

const LoginForm = ({dispatch}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('invalid email address')
        .required('the field is required'),
      password: Yup.string()
        .required('the field is required')
    }),
    onSubmit: values => {
      dispatch(login(values.email, values.password, values.rememberMe));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor={'email'}>email</label>
        <input
          id={'email'}
          name={'email'}
          type={'email'}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      </div>
      <div>
        <label htmlFor={'password'}>password</label>
        <input
          id={'password'}
          name={'password'}
          type={'password'}
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? formik.errors.password : null}
      </div>

      <div>
        <label htmlFor={'rememberMe'}>remember me</label>
        <input
          id={'rememberMe'}
          name={'rememberMe'}
          type={'checkbox'}
          {...formik.getFieldProps('rememberMe')}
        />
      </div>
      <button>sign in</button>
    </form>
  );
};


export default LoginForm;