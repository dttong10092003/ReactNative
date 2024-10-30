
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import jobReducer from './reducers';
import { watchJobSaga } from './sagas';

const rootReducer = combineReducers({ job: jobReducer });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchJobSaga);

export default store;
