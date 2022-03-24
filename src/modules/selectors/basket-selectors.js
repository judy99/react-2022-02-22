import { createSelector } from 'reselect';
import {selectProducts, selectProductById} from './product-selectors'

export function selectBasket(state) {
    return state.basket;
}

export const selectProductCount = createSelector(
    selectBasket,
    (basket) => Object.keys(basket).reduce((acc, productName) => acc + basket[productName], 0)
);

export const selectOrderedProductIds = createSelector(
    selectBasket,
    (basket) => Object.keys(basket),
);

export const selectProductCountById = (state, productId) => {
    return state.basket[productId];
};

export const selectTotalPrice = createSelector(
    selectBasket,
    selectProducts,
    (basket, products) => {
        if (Object.keys(basket).length === 0) return 0;
        const total = Object.keys(basket).reduce((acc, item) => {
            const currentProduct = products.find((product) => product.id === item)
            acc += basket[item] * currentProduct.price
            return acc
        }, 0)
        return total
    }
);
