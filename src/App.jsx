import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';

import About from './pages/About';
import Layout from './components/Layout';
import CartProvider from './context/CartContext';
import ProductsProvider from './context/ProductsContext';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:productId',
          element: <ProductPage />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </CartProvider>
  );
};

export default App;
