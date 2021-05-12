import { useStoreState, useStoreActions } from 'easy-peasy';
import { Produto } from './Produto';

export function ListaProdutos({ productIds, hideButton }) {
    const products = useStoreState(state => state.products.items);
    const addProductToBasket = useStoreActions(actions => actions.basket.addProduct);

    return (
        <div>
            {
                productIds && productIds.length > 0 && productIds.map(id => (
                    <Produto
                        key={id}
                        product={products[id]}
                        hideButton={hideButton}
                        onClick={() => addProductToBasket(id)}
                    />
                ))
            }
        </div>
    );
}
