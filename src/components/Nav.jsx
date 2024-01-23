import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images/';
import { navLinks } from '../constants';
import { shoppingBag, arrowRight } from '../assets/icons';
import CartCard from './CartCard';
import Button from './Button';

const Nav = ({ page, cart, products, changeQty, removeProduct }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  return (
    <header className='padding-x py-8 z-10 w-full absolute'>
      <nav className='flex justify-between items-center max-container flex-wrap'>
        <Link
          to='/'
          className='flex items-center gap-2 hover:scale-110 transition-transform'
        >
          <img src={logo} alt='Logo' width={40} />
          <p className='text-2xl font-bold text-emerald-600'>SwiftCart</p>
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.location}
                className={`font-montserrat leading-normal text-lg 
                ${
                  item.location === page
                    ? ' text-emerald-600 font-bold underline underline-offset-4 decoration-2'
                    : ' text-slate-gray hover:text-slate-400'
                } transition-color`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-10'>
          <div
            className='relative hover:scale-110 transition-transform cursor-pointer'
            onClick={() =>
              cartActive === false ? setCartActive(true) : setCartActive(false)
            }
          >
            <img src={shoppingBag} alt='shopping-bag' width={29} height={29} />
            <span className='flex justify-center items-center absolute z-20 -top-3.5 -right-3.5 text-xs text-white font-bold w-6 h-6 bg-slate-gray rounded-full'>
              {cart
                .map((item) => item.qty)
                .reduce((acc, curr) => {
                  return acc + curr;
                }, 0)}
            </span>
          </div>

          <button
            onClick={() =>
              hamburgerActive === false
                ? setHamburgerActive(true)
                : setHamburgerActive(false)
            }
            className='group flex cursor-pointer items-center justify-center rounded-3xl bg-white p-2 md:hidden'
          >
            <div className='space-y-2'>
              <span className='block h-1 w-8 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45'></span>
              <span className='block h-1 w-8 origin-center rounded-full bg-emerald-600 transition-transform ease-in-out group-hover:w-8 group-hover:-translate-y-1.5 group-hover:-rotate-45'></span>
            </div>
          </button>
        </div>
        {hamburgerActive === true && (
          <ul className='flex-col gap-32 w-full mt-5 md:hidden'>
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={`py-2 px-3 rounded-md 
                ${
                  item.location === page
                    ? 'bg-emerald-600 text-white '
                    : 'text-slate-gray hover:bg-gray-100'
                }`}
              >
                <Link
                  to={item.location}
                  className='font-montserrat w-full block leading-normal text-lg '
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {cartActive === true && (
          <div>
            <div className='z-[1000] fixed top-0 right-0  bg-white h-full w-full leading-5 text-sm max-w-xs md:max-w-xl flex flex-col py-5 px-5 md:px-16 md:py-10 transition-all duration-300 translate-x-0'>
              <div className='flex justify-between align-center text-3xl font-bold'>
                <h2>Shopping Bag</h2>
                <button
                  className='hover:text-slate-gray transition'
                  onClick={() => setCartActive(false)}
                >
                  &#10005;
                </button>
              </div>
              <div className='grow overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                {cart.map((product) => (
                  <CartCard
                    product={product}
                    products={products}
                    changeQty={changeQty}
                    removeProduct={removeProduct}
                    key={product.id}
                  />
                ))}
              </div>
              <div className='border-t border-slate-300 pt-4 md:pt-6 px-7 md:px-16 text-black'>
                <div className='flex justify-between font-bold text-lg mb-4'>
                  <p>Subtotal:</p>
                  <p>
                    $
                    {cart
                      .map((item) => item.qty * item.price)
                      .reduce((acc, curr) => {
                        return acc + curr;
                      }, 0)}
                  </p>
                </div>
                <Button
                  label={'Checkout'}
                  iconURL={arrowRight}
                  fullWidth={true}
                />
              </div>
            </div>
            <div className='z-[999] fixed top-0 right-0 w-full min-h-screen transition-all duration-300 bg-black/70 backdrop-blur-sm'></div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
