export const loggerMiddleware = store => next => action => {
    console.log(store);
    console.log(action);
    console.log(store.getState());

    next(action);
}