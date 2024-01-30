import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';
import About from './pages/About';
import { LoadingWheel } from './components';

const Router = () => {
  const { products, error, loading } = useProducts();
  const {
    cart,
    addToCart,
    changeQty,
    removeProduct,
    cartActive,
    setCartActive,
  } = useCart();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <LoadingWheel />;

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          products={products}
          cart={cart}
          addToCart={addToCart}
          changeQty={changeQty}
          removeProduct={removeProduct}
          cartActive={cartActive}
          setCartActive={setCartActive}
        />
      ),
    },
    {
      path: '/products',
      element: (
        <Products
          products={products}
          cart={cart}
          addToCart={addToCart}
          changeQty={changeQty}
          removeProduct={removeProduct}
          cartActive={cartActive}
          setCartActive={setCartActive}
        />
      ),
    },
    {
      path: '/products/:productId',
      element: (
        <ProductPage
          products={products}
          cart={cart}
          addToCart={addToCart}
          changeQty={changeQty}
          removeProduct={removeProduct}
          cartActive={cartActive}
          setCartActive={setCartActive}
        />
      ),
    },
    {
      path: '/about',
      element: (
        <About
          products={products}
          cart={cart}
          addToCart={addToCart}
          changeQty={changeQty}
          removeProduct={removeProduct}
          cartActive={cartActive}
          setCartActive={setCartActive}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
