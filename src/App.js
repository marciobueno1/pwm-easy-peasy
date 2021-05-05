import { useStoreState } from 'easy-peasy';
import './App.css';
import { ListaProdutos } from './components/ListaProdutos';

function App() {
  const basketProductIds = useStoreState(state => state.basket.productIds);
  const allProducts = useStoreState(state => state.products.items);
  return (
    <div className="App">
      <h1>Todos os Produtos</h1>
      <ListaProdutos productIds={Object.keys(allProducts)} />
      <h1>Itens na sacola</h1>
      <ListaProdutos productIds={basketProductIds} hideButton={true} />
    </div>
  );
}

export default App;
