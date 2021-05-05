import { action } from 'easy-peasy';

const productsModel = {
    items: {
        1: { id: 1, name: 'Peas', price: 10 },
        2: { id: 2, name: 'Beans', price: 20 },
        3: { id: 3, name: 'Rice', price: 15 },
    }
};

const basketModel = {
    productIds: [1],
    addProduct: action((state, payload) => {
        state.productIds.push(payload);
    }),
};

const storeModel = {
    products: productsModel,
    basket: basketModel
};

export default storeModel;