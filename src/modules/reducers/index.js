import {combineReducers} from 'redux';
import {basketReducer} from './basket-reducer';
import {loginReducer} from './login-reducer';

export const rootReducer = combineReducers({
    basket: basketReducer,
    login: loginReducer,
});