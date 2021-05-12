import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

export function AdicionarProdutos() {
    const [idVeiculo, setIdVeiculo] = useState("");
    const saveProduct = useStoreActions(actions => actions.products.saveProduct);

    const adicionarProduto = () => {
        const id = parseInt(idVeiculo);
        if (!id || isNaN(id)) {
            alert("Id inválido!");
            return;
        }
        saveProduct(id);
    }

    return (
        <div>
            <p>
                Digite o ID do veículo:
                <input type="number" value={idVeiculo} onChange={evt => setIdVeiculo(evt.target.value)} />
                <button onClick={adicionarProduto}>Adicionar Produto</button>
            </p>
        </div>
    );
}
