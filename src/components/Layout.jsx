import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({
  cart,
  products,
  changeQty,
  removeProduct,
  cartActive,
  setCartActive,
}) => {
  const location = useLocation();
  return (
    <>
      <Nav
        page={location.pathname}
        cart={cart}
        products={products}
        changeQty={changeQty}
        removeProduct={removeProduct}
        cartActive={cartActive}
        setCartActive={setCartActive}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
