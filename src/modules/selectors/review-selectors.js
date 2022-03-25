import { createSelector } from 'reselect';
import {selectRestaurants, selectRestaurantById, selectRestaurantReview} from './restaurant-selectors'

export const selectReviews = (state) => state.reviews;

export const selectReviewsById = (state, reviewId) =>
    state.reviews.find(({ id }) => id === reviewId);

export const selectReviewsByRestaurant = (state, restaurantReviews) =>
    state.reviews.filter((review) => restaurantReviews.find(item => item === review.id))
