import { useState } from 'react';
import { useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images/';
import { navLinks } from '../constants';
import { shoppingBag } from '../assets/icons';

import HamburgerContent from './HamburgerContent';

const Nav = ({ page, cart, cartActive, setCartActive }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    width >= 768 && setHamburgerActive(false);
  }, [width]);

  return (
    <header className='padding-x py-8 z-20 w-full absolute'>
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
        <HamburgerContent
          page={page}
          setHamburgerActive={setHamburgerActive}
          hamburgerActive={hamburgerActive}
        />
      </nav>
    </header>
  );
};

export default Nav;
