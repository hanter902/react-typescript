import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
// import rootReducer from './root-reducer';
import rootReducer from './counter/reducer';
import {IS_DEV} from '../utils/config-app';

const sagaMiddleware = createSagaMiddleware();
const newSagaMiddleware = IS_DEV? applyMiddleware(sagaMiddleware, logger) : applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, newSagaMiddleware);
sagaMiddleware.run(rootSaga);


