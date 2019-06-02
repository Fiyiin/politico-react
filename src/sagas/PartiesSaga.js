import { call, takeLatest, put } from 'redux-saga/effects';

import * as api from '../api';
import { fetchPartiesSucceeded, fetchPartiesFailed } from '../actions/parties';

function* fetchParties() {
  try {
    const { data } = yield call(api.fetchParties);
    yield put(fetchPartiesSucceeded(data.data[0]));
  } catch (error) {
    yield put(fetchPartiesFailed(error));
  }
}

export default function* rootPartiesSaga() {
  yield takeLatest('FETCH_PARTIES_STARTED', fetchParties);
}
