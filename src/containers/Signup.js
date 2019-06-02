import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signupStarted } from '../actions/authentication';
import SignupForm from '../components/auth/SignupForm';

const Signup = ({
  currentUser, isLoading, userSignup, isAuth, hide,
}) => !isAuth ? (
  <SignupForm
    user={currentUser}
    isLoading={isLoading}
    userSignup={userSignup}
    hide={hide}
  />
) : (
  currentUser.isAdmin ? <Redirect to="/admin" /> : <Redirect to="/home" />
);

const matchDispatchToProps = dispatch => ({
  userSignup: user => dispatch(signupStarted(user)),
});

const mapStateToProps = (state, { hide }) => {
  const {
    currentUser, isLoading, error, token,
  } = state.auth;
  return {
    currentUser, isLoading, error, hide, token, isAuth: !!token,
  };
};

Signup.propTypes = {
  hide: PropTypes.func.isRequired,
  userSignup: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    is_admin: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
