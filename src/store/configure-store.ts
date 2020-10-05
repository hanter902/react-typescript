import { createStore, applyMiddleware, compose } from 'redux';
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
// import rootReducer from './root-reducer';
// import rootReducer from './counter/reducer';
import rootReducer from './reducers/login';
import {IS_DEV} from '../utils/config-app';

const sagaMiddleware = createSagaMiddleware();
const newSagaMiddleware = IS_DEV? applyMiddleware(sagaMiddleware, logger) : applyMiddleware(sagaMiddleware);
const composeEnhancers = IS_DEV && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? 
                        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false}) : compose;

export const store = createStore(rootReducer, composeEnhancers(newSagaMiddleware));
sagaMiddleware.run(rootSaga);
