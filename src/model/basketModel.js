import { action } from 'easy-peasy';

export const basketModel = {
    productIds: [],
    addProduct: action((state, payload) => {
        if (state.productIds.indexOf(payload) === -1) {
            state.productIds.push(payload);
        }
    }),
};
