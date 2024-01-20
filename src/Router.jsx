import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import extraProducts from './extraProducts';

const Router = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('Server Error');
        }
        return res.json();
      })
      .then((data) => setProducts([...data, ...extraProducts]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home products={products} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
