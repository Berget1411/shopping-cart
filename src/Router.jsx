import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import useProducts from './hooks/useProducts';

const Router = () => {
  const { products, error, loading } = useProducts();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home products={products} />,
    },
    {
      path: '/products',
      element: <Products products={products} />,
    },
    {
      path: '/products/:productId',
      element: <ProductPage products={products} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
