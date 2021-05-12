export function Produto({ product, hideButton, onClick }) {
    return (
        <div>
            <h3>
                {product.id}  - {product.name} - {product.price} {" "}
                {!hideButton && (
                    <button onClick={onClick}>
                        Adicionar
                    </button>
                )}
            </h3>
        </div>
    );
}
