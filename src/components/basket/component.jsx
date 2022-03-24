import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectProductCount, selectOrderedProductIds, selectTotalPrice } from '../../modules/selectors/basket-selectors'

import { BasketItem } from '../basket-item/component'

export const Basket = ({ className }) => {
    const productCount = useSelector(selectProductCount);
    const orderedProducts = useSelector(selectOrderedProductIds);
    const price = useSelector(selectTotalPrice);
    return (
        <div className={classnames(styles.root, className)}>
            <span>Order</span>
            <div className={styles.productList}>
                {orderedProducts.map((productId) =>
                    <BasketItem key={productId} productId={productId} />)}
            </div>
            <div className={styles.result}>
                {productCount ? 
                <>
                <div>{productCount}</div>
                <div>${price}</div>
                </>
                : <h4>Your order is empty... </h4> }
            </div>
        </div>
    )
}