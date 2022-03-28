import { ADD_USER } from '../actions/user-actions';
import {normalizedUsers} from '../../fixtures'

export const userReducer = (state = normalizedUsers, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.user]
        default:
            return state 
    }
}