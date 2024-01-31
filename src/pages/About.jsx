import { Nav } from '../components';

import AboutContent from '../sections/AboutContent';

const About = ({
  products,
  cart,
  changeQty,
  removeProduct,
  cartActive,
  setCartActive,
}) => {
  return (
    <main className='relative'>
      <Nav
        page={'/about'}
        cart={cart}
        products={products}
        changeQty={changeQty}
        removeProduct={removeProduct}
        cartActive={cartActive}
        setCartActive={setCartActive}
      />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <AboutContent />
      </section>
    </main>
  );
};

export default About;
