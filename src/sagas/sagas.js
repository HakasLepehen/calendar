import { all, put, call, takeEvery } from 'redux-saga/effects';
import { saveEmployees } from '../actions/actions';
import { getEmployees } from '../API/requests';
import { FETCH_EMPLOYEES } from '../constants/constants';
import { getArrayOfEmployees } from '../utils/employee';

function* loadingEmployees() {
  const data = yield getEmployees();
  const employees = yield getArrayOfEmployees(data);
  yield put(saveEmployees(employees));
}

function* watchLoadingEmployees() {
  yield takeEvery(FETCH_EMPLOYEES, loadingEmployees);
}

export default function* rootSaga() {
  yield all([watchLoadingEmployees()]);
}
