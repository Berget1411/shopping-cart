import { useState } from 'react';

import { Filter, ProductCardGrid } from '../sections/';
import { useProducts } from '../context/ProductsContext';

const Products = () => {
  const { products } = useProducts();
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('a-z');

  const sortProducts = () => {
    switch (sort) {
      case 'a-z':
        return products.toSorted((a, b) => a.title.localeCompare(b.title));

      case 'z-a':
        return products.toSorted((a, b) => b.title.localeCompare(a.title));

      case 'low-high':
        return products.toSorted((a, b) => a.price - b.price);

      case 'high-low':
        return products.toSorted((a, b) => b.price - a.price);
    }
  };

  const filteredProducts = sortProducts().filter(
    (product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase()) &&
      (category === 'all' || product.category === category)
  );

  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Filter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <ProductCardGrid filteredProducts={filteredProducts} />
      </section>
    </main>
  );
};

export default Products;
