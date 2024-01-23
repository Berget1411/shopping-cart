import { PopularProductCard } from '../components';

const ProductCardGrid = ({ filteredProducts }) => {
  return (
    <div className='max-container mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-14'>
      {filteredProducts.map((product) => (
        <PopularProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductCardGrid;
