import Button from '../components/Button';
import { medal } from '../assets/images';
import { Link } from 'react-router-dom';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We Provide You
          <span className='text-emerald-600 '> Super</span>
          <span className='text-emerald-600 '> Quality </span>Products
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style across clothing, accessories, and
          electronics, our meticulously crafted products are designed to elevate
          your experience. We provide unmatched quality, innovation, and a touch
          of elegance to enhance your wardrobe and tech collection.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensure your satisfaction
        </p>
        <div className='mt-11'>
          <Link to='/about'>
            <Button label='View Details' />
          </Link>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={medal}
          alt='medal'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
