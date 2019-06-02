import { call, takeLatest, put } from 'redux-saga/effects';
import * as api from '../api';
import {
  signupSucceeded, signupFailed, loginSucceeded, loginFailed,
} from '../actions/authentication';

function* authenticateUser(action) {
  if (action.type === 'SIGNUP_STARTED') {
    try {
      const { data } = yield call(api.signup, action.payload.user);
      localStorage.token = data.data[0].token;
      yield put(signupSucceeded(data.data[0]));
    } catch (error) {
      yield put(signupFailed(error));
    }
  } else {
    try {
      const { data } = yield call(api.login, action.payload.user);
      localStorage.token = data.data[0].token;
      yield put(loginSucceeded(data.data[0]));
    } catch (error) {
      yield put(loginFailed(error));
    }
  }
}


export default function* rootAuthSaga() {
  yield takeLatest(['SIGNUP_STARTED', 'LOGIN_STARTED'], authenticateUser);
}
