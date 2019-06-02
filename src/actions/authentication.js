
export const signupStarted = user => ({
  type: 'SIGNUP_STARTED',
  payload: { user },
});

export const signupSucceeded = user => ({
  type: 'SIGNUP_SUCCEEDED',
  payload: user,
});

export const signupFailed = error => ({
  type: 'SIGNUP_FAILED',
  payload: { error },
});

export const loginStarted = user => ({
  type: 'LOGIN_STARTED',
  payload: { user },
});

export const loginSucceeded = user => ({
  type: 'SIGNUP_SUCCEEDED',
  payload: user,
});

export const loginFailed = error => ({
  type: 'SIGNUP_FAILED',
  payload: { error },
});

export const logoutUser = () => {
  delete localStorage.token;
  return { type: 'LOGOUT' };
};
