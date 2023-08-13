import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, loadCart } from './store';
import getProducts from './api/getProducts';
import { Layout } from './components';
import { Home, ProductDetail } from './pages';

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/product/:id',
          element: <ProductDetail />,
        }
      ]
    }
  ]);

  const handleGetProducts = async () => {
    const result = await getProducts();
    dispatch(add(result));
  }

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    const cartArray = JSON.parse(cart);
    dispatch(loadCart(cartArray || []));
  }, []);

  useEffect(() => {
    handleGetProducts();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
