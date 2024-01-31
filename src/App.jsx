import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';
import About from './pages/About';
import { LoadingWheel } from './components';
import Layout from './components/Layout';

const App = () => {
  const { products, error, loading } = useProducts();
  const cart = useCart();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <LoadingWheel />;

  const router = createBrowserRouter([
    {
      element: <Layout products={products} {...cart} />,
      children: [
        {
          path: '/',
          element: <Home products={products} {...cart} />,
        },
        {
          path: '/products',
          element: <Products products={products} {...cart} />,
        },
        {
          path: '/products/:productId',
          element: <ProductPage products={products} {...cart} />,
        },
        {
          path: '/about',
          element: <About products={products} {...cart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
