import { Produto } from './Produto';

export function ListaProdutos({ productIds, hideButton }) {
    return (
        <div>
            {
                productIds && productIds.length > 0 && productIds.map(id => (
                    <Produto key={id} id={id} hideButton={hideButton} />
                ))
            }
        </div>
    );
}