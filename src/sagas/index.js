import { spawn } from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import PartiesSaga from './PartiesSaga';

function* rootSaga() {
  yield spawn(AuthSaga);
  yield spawn(PartiesSaga);
}

export default rootSaga;
