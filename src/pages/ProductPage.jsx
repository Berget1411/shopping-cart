import { useParams } from 'react-router-dom';

import { Product } from '../sections';
import { useProducts } from '../context/ProductsContext';

const ProductPage = () => {
  const { products } = useProducts();
  const { productId } = useParams();
  const [product] = products.filter((item) => item.id == productId);

  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Product product={product} />
      </section>
    </main>
  );
};

export default ProductPage;
