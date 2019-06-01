import { call, takeLatest, put } from 'redux-saga/effects';

import * as api from './api';
import {
  signupSucceeded, signupFailed, loginSucceeded, loginFailed,
} from './actions';

function* authenticateUser(action) {
  if (action.type === 'SIGNUP_STARTED') {
    try {
      const { data } = yield call(api.signup, action.payload.user);
      yield put(signupSucceeded(data.data[0]));
    } catch (error) {
      yield put(signupFailed(error));
    }
  } else {
    try {
      const { data } = yield call(api.login, action.payload.user);
      yield put(loginSucceeded(data.data[0]));
    } catch (error) {
      yield put(loginFailed(error));
    }
  }
}


export default function* rootSaga() {
  yield takeLatest(['SIGNUP_STARTED', 'LOGIN_STARTED'], authenticateUser);
}
