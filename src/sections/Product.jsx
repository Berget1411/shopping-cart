import { star } from '../assets/icons';
import { Button } from '../components';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <section className='padding-x max-container flex flex-col gap-y-8 gap-x-32 lg:flex-row mb-32 pt-32'>
      <div className='flex justify-center max-w-lg w-full mx-auto  p-4 rounded-xl'>
        <img
          src={product.image}
          alt={product.title}
          className=' w-[300px] md:w-[412px]'
        />
      </div>
      <div className='flex-1'>
        <div className='flex gap-5 mb-2 font-palanquin'>
          <p>
            <span className='font-bold'>ID: </span>
            {product.id}
          </p>
          <p>
            <span className='font-bold'>Category: </span>
            {product.category}
          </p>
        </div>
        <h3 className='text-2xl font-bold mb-2 font-montserrat'>
          {product.title}
        </h3>
        <div className='flex gap-1 text-lg font-palanquin'>
          <img src={star} alt='' width={15} height={15} />
          <p className='font-bold'>{product.rating.rate}</p>
          <p className='text-slate-gray'>({product.rating.count})</p>
        </div>
        <p className='text-3xl border-b py-4 mb-6 font-palanquin'>
          <span className='font-bold text-lg'>$</span>
          {product.price}
        </p>
        <p className='info-text mb-6'>{product.description}</p>
        <div className='flex gap-2'>
          <Link to={'/products'}>
            <Button
              label={'Go Back'}
              backgroundColor={'bg-slate-gray'}
              textColor={'text-white'}
              borderColor={'bg-slate-gray'}
            />
          </Link>
          <Button label={'Add to Bag'} />
        </div>
      </div>
    </section>
  );
};

export default Product;
