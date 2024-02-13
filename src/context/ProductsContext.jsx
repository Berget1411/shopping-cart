import { createContext, useContext, useEffect, useState } from 'react';
import extraProducts from '../extraProducts';

const ProductsContext = createContext();
export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
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

  const value = { products, error, loading };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
