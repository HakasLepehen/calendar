import { all, takeEvery } from 'redux-saga/effects'
import { FETCH_EMPLOYEES } from '../constants/constants';

function* loadingEmployees() {
  yield console.log('It works!');
}

function* watchLoadingEmployees() {
  yield takeEvery(FETCH_EMPLOYEES, loadingEmployees);
}

export default function* rootSaga() {
  yield all([
    watchLoadingEmployees()
  ]);
}