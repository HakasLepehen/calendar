import { createStore, combineReducers } from 'redux';
import { selectEmployeeReducer } from '../reducers/selectEmployee.js';

const reducer = combineReducers({
  selectEmployee: selectEmployeeReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
