import { useParams } from 'react-router-dom';
import { Nav } from '../components';
import { Product } from '../sections';

const ProductPage = ({
  products,
  cart,
  addToCart,
  changeQty,
  removeProduct,
  cartActive,
  setCartActive,
}) => {
  const { productId } = useParams();
  const [product] = products.filter((item) => item.id == productId);

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
