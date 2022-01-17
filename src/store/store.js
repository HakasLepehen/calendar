import { createStore, combineReducers } from 'redux';
import { shiftReducer } from '../reducers/shiftReducer.js';
import { moderatorReducer } from '../reducers/moderatorReducer.js';

const reducer = combineReducers({
  shiftReducer: shiftReducer,
  moderatorReducer: moderatorReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
