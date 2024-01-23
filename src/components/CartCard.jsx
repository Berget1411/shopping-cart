const CartCard = ({ product, products, changeQty, removeProduct }) => {
  const [productFull] = products.filter((item) => item.id === product.id);

  return (
    <div className='flex gap-5 mt-4 shadow-xl p-2 md:p-10 rounded-2xl'>
      <div>
        <img
          src={productFull.image}
          alt={productFull.title}
          width={100}
          height={100}
        />
      </div>
      <div className='flex flex-col w-full justify-between'>
        <div className='flex justify-between align-center'>
          <p className=''>{productFull.title}</p>
          <button className='  ' onClick={() => removeProduct(product.id)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-[22px] h-[22px] stroke-black hover:stroke-gray-400 ease-in-out duration-200'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
              />
            </svg>
          </button>
        </div>
        <div className='flex justify-between'>
          <p className='text-lg font-bold'>${productFull.price}</p>
          <div className='flex gap-4'>
            <button
              className=' bg-primary p-1 rounded-full hover:bg-slate-300 transition '
              onClick={() => changeQty(product.id, 'remove')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 12h14'
                />
              </svg>
            </button>
            <p className='text-lg font-bold'>{product.qty}</p>
            <button
              className='bg-primary p-1 rounded-full hover:bg-slate-300 transition'
              onClick={() => changeQty(product.id, 'add')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
