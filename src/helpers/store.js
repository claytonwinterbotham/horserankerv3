import { createStore, applyMiddleware } from 'redux';
import ReduxPromise  from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        ReduxPromise,
        thunkMiddleware,
        loggerMiddleware
    )
);

