import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginStarted } from '../actions';
import LoginForm from '../components/LoginForm';

const Login = ({
  user, userLogin, hide, isAuth,
}) => !isAuth ? (
  <LoginForm
    isAuth={isAuth}
    userLogin={userLogin}
    hide={hide}
  />
) : (
  user.is_admin ? <Redirect to="/admin" /> : <Redirect to="/tab" />
);

const matchDispatchToProps = dispatch => ({
  userLogin: user => dispatch(loginStarted(user)),
});

const mapStateToProps = (state, { hide }) => {
  const { user, token } = state.auth;
  return {
    hide, user, token, isAuth: !!token,
  };
};

Login.propTypes = {
  hide: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    is_admin: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
