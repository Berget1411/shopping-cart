import { useState } from 'react';
import { Link } from 'react-router-dom';
import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { statistics } from '../constants';

const Hero = ({ product1, product2, product3 }) => {
  const [bigProduct, setBigProduct] = useState(product1);
  const products = [product1, product2, product3];
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-6 '>
        <p className='text-xl font-montserrat text-emerald-600'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <b />
          <span className='text-emerald-600 inline-block mt-3 '>Swift</span>
          Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover Stylish shoe arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Show now' iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <Link to={`/products/${bigProduct.id}`}>
          <img
            src={bigProduct.image}
            alt='shoe collection'
            width={610}
            height={500}
            className='object-contain relative z-10 hover:scale-110 transition-transform cursor-pointer '
          />
        </Link>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                imgURL={product.image}
                changeBigProductImg={() => {
                  setBigProduct(product);
                }}
                bigProductImg={bigProduct.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
