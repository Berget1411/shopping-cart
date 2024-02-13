import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import LoadingWheel from './LoadingWheel';
import Cart from './Cart';
import { useProducts } from '../context/ProductsContext';

const Layout = () => {
  const { error, loading } = useProducts();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <LoadingWheel />;

  const location = useLocation();
  return (
    <>
      <Nav page={location.pathname} />
      <main>
        <Outlet />
      </main>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      <div>
        <Cart />
      </div>
    </>
  );
};

export default Layout;
