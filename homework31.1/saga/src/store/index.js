import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../reducers/todoReducer.js';
import rootSaga from '../sagas/todoSagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
