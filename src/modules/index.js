import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers'
import { loggerMiddleware } from './middlewares/logger';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
