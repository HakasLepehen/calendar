import { createStore, combineReducers } from 'redux';
import { employeeReducer } from '../reducers/employeeReducer.js';
import { shiftReducer } from '../reducers/shiftReducer.js';

const reducer = combineReducers({
  employeeReducer: employeeReducer,
  shiftReducer: shiftReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
