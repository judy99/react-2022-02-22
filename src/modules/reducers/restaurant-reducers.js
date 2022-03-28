import { normalizedRestaurants } from '../../fixtures'
import { ADD_REVIEW } from '../actions/restaurant-actions';

export const restaurantReducer = (state = normalizedRestaurants, action) => {
    console.log('restaurant reducer action = ', action);
    // console.log('state restaurant reviews = ', Object.values(state));
    switch (action.type) {
        case ADD_REVIEW:
            return [...state.map((rest) => rest.id === action.id ? 
                {...rest, reviews: [...rest.reviews, action.reviewId]} : {...rest}) ]
        default:
            return state;
    }
}
