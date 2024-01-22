import { useState } from 'react';
import Nav from '../components/Nav';
import { Footer } from '../sections';

const Products = ({ products }) => {
  const [searchInput, setSearchInput] = useState(null);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState(null);
  return (
    <main className='relative'>
      <Nav page={'products'} />
      <section className='xl:padding-l wide:padding-r padding-b'>
        Search
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        productCards
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default Products;
