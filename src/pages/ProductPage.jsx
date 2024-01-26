import { useParams } from 'react-router-dom';
import { Nav } from '../components';
import { Footer, Product } from '../sections';

const ProductPage = ({
  products,
  cart,

  addToCart,
  changeQty,
  removeProduct,
}) => {
  const { productId } = useParams();
  const [product] = products.filter((item) => item.id == productId);

  return (
    <main className='relative'>
      <Nav
        page={'products'}
        cart={cart}
        products={products}
        changeQty={changeQty}
        removeProduct={removeProduct}
      />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Product product={product} cart={cart} addToCart={addToCart} />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default ProductPage;