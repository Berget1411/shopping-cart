import { PopularProductCard } from '../components';
import { useProducts } from '../context/ProductsContext';

const PopularProducts = () => {
  const { products } = useProducts();
  const topProducts = products
    .toSorted((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our
          <span className='text-emerald-600'> Popular </span>
          Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {topProducts.map((product) => (
          <PopularProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
