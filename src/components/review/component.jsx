import { Rate } from '../rate/component';
import styles from './styles.module.css';
import { selectUserById } from '../../modules/selectors/user-selectors'
import { useSelector } from 'react-redux';

export const Review = ({ userId, text, rating }) => {
    const currentUser = useSelector((state) => selectUserById(state, userId))
    const {name} = currentUser
    return (
        <>
        <div className={styles.review}>
        <div className={styles.content}>
            <div>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.comment}>{text}</p>
            </div>
            <div className={styles.rate}>
                <Rate value={rating} />
            </div>
        </div>
        </div>
        </>
    )
}