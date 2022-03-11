
import { useMemo } from 'react';
import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import styles from './styles.module.css';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    const averageRating = useMemo(() => {
        const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / reviews.length);
    }, [reviews]);

    return (
        <div>
            <Banner heading={name}>
                <Rate value={averageRating} />
            </Banner>
            <div className={styles.restaurant}>
                <Menu menu={menu} />
                <Reviews reviews={reviews} />
            </div>
        </div>
    );
};
