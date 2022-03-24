export const selectProducts = (state) => state.products;


export const selectProductById = (state, productId) =>
    state.products.find(({ id }) => id === productId);

// export const selectProductPriceById = (state, productId) =>
//     state.products.find(({ id }) => (id === productId) ? state.products.price : 0);