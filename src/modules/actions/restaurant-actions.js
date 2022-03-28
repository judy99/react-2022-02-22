export const ADD_REVIEW = 'restaurant/ADD_REVIEW';

export const addReview = (id, reviewId) => {
    return {
        type: ADD_REVIEW,
        id: id,
        reviewId: reviewId
    };
}