import { ADD_REVIEW } from '../actions/review-actions';
import {normalizedReviews} from '../../fixtures'

export const reviewReducer = (state = normalizedReviews, action) => {
    console.log('action', action.review);
    // const newReview = action.newReview
    switch (action.type) {
        case ADD_REVIEW:
            return [...state, action.review]
        default:
            return state 
    }
}