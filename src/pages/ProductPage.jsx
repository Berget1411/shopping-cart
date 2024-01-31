import { useParams } from 'react-router-dom';

import { Product } from '../sections';

const ProductPage = ({ products, cart, addToCart, setCartActive }) => {
  const { productId } = useParams();
  const [product] = products.filter((item) => item.id == productId);

  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Product
          product={product}
          cart={cart}
          addToCart={addToCart}
          setCartActive={setCartActive}
        />
      </section>
    </main>
  );
};

export default ProductPage;
