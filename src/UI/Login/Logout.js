import React from 'react';
import {logout} from '../../redux/authReducer';
import {connect} from 'react-redux';

const Logout = (props) => {
  // eslint-disable-next-line react/prop-types
  return <button onClick={props.logout}>logout</button>;
};

export default connect(null, {logout})(Logout);