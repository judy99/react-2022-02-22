import {combineReducers} from 'redux';
import {basketReducer} from './basket-reducer';

export const rootReducer = combineReducers({
    basket: basketReducer,
});