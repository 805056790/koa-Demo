import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger'
import rootSaga from '../sagas'
import reducer from '../reducer/reducer';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleware, createLogger())
  )
);
sagaMiddleware.run(rootSaga);

export default store;