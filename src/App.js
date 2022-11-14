import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const quantity = useSelector(state => state.cart.totalQuantity)

  const visibility = useSelector(state => state.ui.showCart)
  return (
    <Layout>
    { !visibility && <Cart quantity={quantity} />}
      
      <Products />
    </Layout>
  );
}

export default App;
