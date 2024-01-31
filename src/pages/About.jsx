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
      <section className='xl:padding-l wide:padding-r padding-b'>
        <AboutContent />
      </section>
    </main>
  );
};

export default About;
