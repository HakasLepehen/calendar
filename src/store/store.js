import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { shiftReducer } from '../reducers/shiftReducer.js';
import { authReducer } from '../reducers/authReducer.js';
import { userReducer } from '../reducers/userReducer.js';

const sagaMiddleWare = createSagaMiddleware();
const reducer = combineReducers({
  shiftReducer: shiftReducer,
  authReducer: authReducer,
  userReducer: userReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleWare),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
