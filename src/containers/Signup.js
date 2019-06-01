import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signupStarted } from '../actions';
import SignupForm from '../components/SignupForm';

const Signup = ({
  user, isLoading, userSignup, isAuth, hide,
}) => !isAuth ? (
  <SignupForm
    user={user}
    isLoading={isLoading}
    userSignup={userSignup}
    hide={hide}
  />
) : (
  user.is_admin ? <Redirect to="/admin" /> : <Redirect to="/user" />
);

const matchDispatchToProps = dispatch => ({
  userSignup: user => dispatch(signupStarted(user)),
});

const mapStateToProps = (state, { hide }) => {
  const {
    user, isLoading, error, token,
  } = state.auth;
  return {
    user, isLoading, error, hide, token, isAuth: !!token,
  };
};

Signup.propTypes = {
  hide: PropTypes.func.isRequired,
  userSignup: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    is_admin: PropTypes.bool,
  }).isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(Signup);
