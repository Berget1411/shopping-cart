const ProductCard = ({ imgURL, changeBigProductImg, bigProductImg }) => {
  const handleClick = () => {
    if (bigProductImg !== imgURL) {
      changeBigProductImg(imgURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl  transition-colors 
  ${
    bigProductImg === imgURL ? 'border-emerald-600' : 'border-transparent'
  } cursor-pointer max-sm:flex-1
  `}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL}
          alt={'shoe collection'}
          width={127}
          height={103}
          className={`object-contain transition-transform ${
            bigProductImg === imgURL ? 'scale-125' : null
          }`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
