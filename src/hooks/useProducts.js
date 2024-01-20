import { useEffect, useState } from 'react';
import extraProducts from '../extraProducts';

const useProducts = () => {
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

  return { products, error, loading };
};

export default useProducts;
