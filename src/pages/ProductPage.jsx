import { useParams } from 'react-router-dom';
import { Nav } from '../components';
import { Footer } from '../sections';

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.filter((product) => (product.id = productId));
  return (
    <main className='relative'>
      <Nav page={'products'} />
      <section>
        <Product product={product} />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default ProductPage;
