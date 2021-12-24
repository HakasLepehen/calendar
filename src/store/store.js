import { createStore, combineReducers } from 'redux';
import { shiftReducer } from '../reducers/shiftReducer.js';

const reducer = combineReducers({
  shiftReducer: shiftReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
