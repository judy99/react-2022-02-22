import { useSelector } from 'react-redux';
import { Review } from '../review/component';
import styles from './styles.module.css';
import {selectReviewsByRestaurant} from '../../modules/selectors/review-selectors'

export const Reviews = ({reviews}) => {
    const currentReviews = useSelector((state) => selectReviewsByRestaurant(state, reviews))
    return (
        <div className={styles.reviews}>
            {currentReviews.map((review) => (
                <Review key={review.id} {...review} />
            ))}
        </div>
    );
};
