import { createStore, combineReducers } from 'redux';
import { shiftReducer } from '../reducers/shiftReducer.js';
import { authReducer } from '../reducers/authReducer.js';
import { userReducer } from '../reducers/userReducer.js';

const reducer = combineReducers({
  shiftReducer: shiftReducer,
  authReducer: authReducer,
  userReducer: userReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
