import { action, thunk } from 'easy-peasy';
import axios from 'axios';

export const productsModel = {
    error: null,
    setError: action((state, payload) => {
        state.error = payload;
    }),
    clearError: action((state) => {
        state.error = null;
    }),
    items: {
        1: { id: 1, name: 'Peas', price: 10 },
        2: { id: 2, name: 'Beans', price: 20 },
        3: { id: 3, name: 'Rice', price: 15 },
    },
    addItem: action((state, payload) => {
        let qtdItens = Object.keys(state.items).length;
        ++qtdItens;
        const item = { ...payload, id: qtdItens };
        state.items[qtdItens] = item;
    }),
    saveProduct: thunk(async (actions, payload) => {
        try {
            actions.clearError();
            const { data } = await axios.get(`https://swapi.dev/api/vehicles/${payload}/`);
            if (data.detail === "Not found") {
                console.log('Não encontrado!');
                return;
            }
            const veiculo = {
                name: data.name,
                price: data.cost_in_credits,
            };
            actions.addItem(veiculo);
        } catch (err) {
            console.log("Erro: ", err);
            actions.setError("Erro: " + err);
        }
    }),
};
