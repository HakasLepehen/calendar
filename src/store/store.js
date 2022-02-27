import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { shiftReducer } from '../reducers/shiftReducer.js';
import { authReducer } from '../reducers/authReducer.js';
import { employeeReducer } from '../reducers/userReducer.js';
import rootSaga from '../sagas/sagas.js';

const sagaMiddleWare = createSagaMiddleware();
const reducer = combineReducers({
  shiftReducer: shiftReducer,
  authReducer: authReducer,
  employeeReducer: employeeReducer,
});

const composedEnhancer = compose(
  applyMiddleware(sagaMiddleWare),
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export const store = createStore(reducer, undefined, composedEnhancer);

sagaMiddleWare.run(rootSaga);
