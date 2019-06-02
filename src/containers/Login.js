import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginStarted } from '../actions/authentication';
import LoginForm from '../components/auth/LoginForm';

const Login = ({
  currentUser, userLogin, hide, isAuth,
}) => !isAuth ? (
  <LoginForm
    isAuth={isAuth}
    userLogin={userLogin}
    hide={hide}
  />
) : (
  currentUser.isAdmin ? <Redirect to="/admin" /> : <Redirect to="/home" />
);

const matchDispatchToProps = dispatch => ({
  userLogin: user => dispatch(loginStarted(user)),
});

const mapStateToProps = (state, { hide }) => {
  const { currentUser, token } = state.auth;
  return {
    hide, currentUser, token, isAuth: !!token,
  };
};

Login.propTypes = {
  hide: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Login);
