import { star } from '../assets/icons';
import { Link } from 'react-router-dom';

const PopularProductCard = ({ image, title, price, rating, id, category }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className='flex flex-1 flex-col w-full max-sm:w-full sm-max: items-center  py-4 rounded-xl shadow-2xl hover:scale-110 transition-transform'>
        <img
          src={image}
          alt={title}
          className={`${
            category === 'shoes' ? 'bg-[#C1C4DE]' : null
          } w-[280px] h-[280px]  rounded-[25px]`}
        />

        <div className='mt-8 flex justify-start gap-2.5'>
          <img src={star} alt='rating' width={24} height={24} />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>
            ({rating.rate})
          </p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
          {title.slice(0, 20)}
        </h3>
        <p className='mt-2 font-semibold font-montserrat text-emerald-600 text-xl leading-normal'>
          {price}
        </p>
      </div>
    </Link>
  );
};

export default PopularProductCard;
