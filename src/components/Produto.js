import { useStoreState, useStoreActions } from 'easy-peasy';

export function Produto({ id, hideButton }) {
    const product = useStoreState(state => state.products.items[id]);
    const addProductToBasket = useStoreActions(actions => actions.basket.addProduct);
    return (
        <div>
            <h2>{product.id}  - {product.name} - {product.price}</h2>
            {!hideButton && (
                <button onClick={() => addProductToBasket(product.id)}>
                    Adicionar à Sacola de Compras
                </button>
            )}
        </div>
    );
}