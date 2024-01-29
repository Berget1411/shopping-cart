import { Nav } from '../components';
import { Footer } from '../sections';

const About = ({ products, cart, changeQty, removeProduct }) => {
  return (
    <main className='relative'>
      <Nav
        page={'about'}
        cart={cart}
        products={products}
        changeQty={changeQty}
        removeProduct={removeProduct}
      />
      <section className='xl:padding-l wide:padding-r padding-b'>
        Content
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default About;
