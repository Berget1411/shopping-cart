import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

import Cart from './Cart';

const Layout = (props) => {
  const location = useLocation();
  return (
    <>
      <Nav page={location.pathname} {...props} />
      <main>
        <Outlet />
      </main>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
      <div>
        <Cart {...props} />
      </div>
    </>
  );
};

export default Layout;
