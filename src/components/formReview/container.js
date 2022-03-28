import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { addReview } from "../../modules/actions/review-actions";
import { addUser } from "../../modules/actions/user-actions";
import { addReview as addReviewToRestaurant } from "../../modules/actions/restaurant-actions";
import {FormReview} from './component'

export const FormReviewContainer = ({restaurantId}) => {
    const defaultValues = {
        name: '',
        text: '',
        rating: 1
    }

const dispatch = useDispatch();

const onSubmit = ({name, text, rating}) => {
    console.log('name = ', name);
    console.log('review = ', text);
    console.log('rate = ', rating);
    // if (user.name && review.text && review.rating) {
    //     newUser = {...user, id: uuidv4()}
    //     newReview = {...review, id: uuidv4(), userId: newUser.id}
    // }


    // add review and user
    const newUser = {id: uuidv4(), name}
    const newReview = {id: uuidv4(), userId: newUser.id, text, rating}
    dispatch(addUser(newUser))
    dispatch(addReview(newReview))
    dispatch(addReviewToRestaurant(restaurantId, newReview.id))

    // console.log('newUser', newUser);
    // console.log('newReview', newReview);

    // setUser({name: ''})
    // setReview({text: '', rating: 0})
}
    return (
        <FormReview onSubmit={onSubmit} defaultValues={defaultValues} />
    )
}

