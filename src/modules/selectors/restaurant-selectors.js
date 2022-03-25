import { createSelector } from 'reselect';

export const selectRestaurants = (state) => state.restaurants;

export const selectRestaurantById = (state, restId) => state.restaurants.find(id => id === restId);

// export const selectRestaurantReview = (restId) => createSelector(
//     selectRestaurantById(restId),
//     (restaurant) => restaurant.reviews
// )
