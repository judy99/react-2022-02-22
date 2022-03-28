import { useMemo } from 'react';
import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { FormReviewContainer } from '../formReview/container';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectReviewsByRestaurant } from '../../modules/selectors/review-selectors'


export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;
    const currentReviews = useSelector((state) => selectReviewsByRestaurant(state, reviews))
    const avgRate = useMemo(() => Math.round(currentReviews.reduce((acc, item) => acc + item.rating, 0)/currentReviews.length), [reviews])
    return (
        <div>
            <Banner heading={name}>
                <Rate value={avgRate} />
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <Menu menu={menu} />
                    <Reviews reviews={reviews}/>
                    <FormReviewContainer restaurantId={restaurant.id} />
                </ErrorBoundary>
            </div>
        </div >
    );
};
