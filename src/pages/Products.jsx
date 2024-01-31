import { useState } from 'react';
import { Nav } from '../components/';
import { Filter, ProductCardGrid } from '../sections/';

const Products = ({
  products,
  cart,
  addToCart,
  changeQty,
  removeProduct,
  cartActive,
  setCartActive,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('a-z');

  const sortProducts = () => {
    switch (sort) {
      case 'a-z':
        return products.sort((a, b) => a.title.localeCompare(b.title));

      case 'z-a':
        return products.sort((a, b) => b.title.localeCompare(a.title));

      case 'low-high':
        return products.sort((a, b) => a.price - b.price);

      case 'high-low':
        return products.sort((a, b) => b.price - a.price);
    }
  };

  const filteredProducts = sortProducts().filter(
    (product) =>
      product.title.toLowerCase().includes(searchInput) &&
      (category === 'all' || product.category === category)
  );

  return (
    <main className='relative'>
      <Nav
        page={'/products'}
        cart={cart}
        products={products}
        changeQty={changeQty}
        removeProduct={removeProduct}
        cartActive={cartActive}
        setCartActive={setCartActive}
      />
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
