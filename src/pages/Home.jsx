import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from '../sections';

const Home = ({
  products,
  cart,
  addToCart,
  changeQty,
  removeProduct,
  cartActive,
  setCartActive,
}) => {
  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b '>
        <Hero
          product1={products[20]}
          product2={products[21]}
          product3={products[22]}
        />
      </section>
      <section className='padding'>
        <PopularProducts products={products} />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className=' bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
    </main>
  );
};

export default Home;
