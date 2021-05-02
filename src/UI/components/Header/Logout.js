import React from 'react';
import {logout} from '../../../redux/authReducer';

const Logout = ({dispatch}) => {
  return (
    <button onClick={() => dispatch(logout())}>logout</button>
  );
};

export default Logout;