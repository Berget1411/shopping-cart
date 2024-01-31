import { Link } from 'react-router-dom';
import { logo } from '../assets/images/';
import { navLinks } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const HamburgerContent = ({ page, hamburgerActive, setHamburgerActive }) => {
  return (
    <AnimatePresence>
      {hamburgerActive && (
        <>
          <motion.div
            key={'hamburgerContent'}
            initial={{ x: '100%' }}
            animate={{ x: '0' }}
            exit={{ x: '100%' }}
            transition={{ bounce: false }}
            className='z-50 fixed top-0 right-0  bg-white h-full leading-5 w-full max-w-xs flex flex-col py-5 px-5'
          >
            <div className='flex items-center justify-between border-b-2 pb-3'>
              <div className='flex items-center gap-2'>
                <img src={logo} alt='Logo' width={40} />
                <h2 className='text-2xl font-bold text-emerald-600'>
                  SwiftCart
                </h2>
              </div>
              <button
                className='hover:text-slate-gray transition text-2xl'
                onClick={() => setHamburgerActive(false)}
              >
                &#10005;
              </button>
            </div>
            <ul className='flex-1 flex flex-col gap-10 mt-5'>
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
          </motion.div>
          <motion.div
            key={'blur'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='z-40 fixed top-0 right-0 w-full min-h-screen bg-black/70 backdrop-blur-sm'
            onClick={() => setHamburgerActive(false)}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HamburgerContent;
