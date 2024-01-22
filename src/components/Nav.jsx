import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images/';
import { navLinks } from '../constants';
import { shoppingBag } from '../assets/icons';

const Nav = ({ page }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
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
          <Link to='cart' className='hover:scale-110 transition-transform'>
            <img src={shoppingBag} alt='shopping-bag' width={29} height={29} />
          </Link>

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
      </nav>
    </header>
  );
};

export default Nav;
