import CartCard from './CartCard';
import Button from './Button';
import { AnimatePresence, motion } from 'framer-motion';
import { arrowRight } from '../assets/icons';

const Cart = ({
  cart,
  products,
  changeQty,
  removeProduct,
  cartActive,
  setCartActive,
}) => {
  return (
    <AnimatePresence>
      {cartActive && (
        <>
          <motion.div
            key={'cart'}
            initial={{ x: '100%' }}
            animate={{ x: '0' }}
            exit={{ x: '100%' }}
            transition={{ bounce: false }}
            className={
              'z-50 fixed top-0 right-0 bg-white h-full w-full leading-5 text-sm max-w-xs md:max-w-xl flex flex-col py-5 px-5 md:px-16 md:py-10'
            }
          >
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
              {cart.length === 0 ? (
                <p className='text-lg mt-5'>
                  No items have been added to your bag
                </p>
              ) : (
                cart.map((product) => (
                  <CartCard
                    product={product}
                    products={products}
                    changeQty={changeQty}
                    removeProduct={removeProduct}
                    key={product.id}
                  />
                ))
              )}
            </div>
            <div className='border-t border-slate-300 pt-4 md:pt-6 px-7 md:px-16 text-black'>
              <div className='flex justify-between font-bold text-lg mb-4'>
                <p>Subtotal:</p>
                <p>
                  $
                  {Math.round(
                    cart
                      .map((item) => item.qty * item.price)
                      .reduce((acc, curr) => {
                        return acc + curr;
                      }, 0) * 100
                  ) / 100}
                </p>
              </div>
              <Button
                label={'Checkout'}
                iconURL={arrowRight}
                fullWidth={true}
              />
            </div>
          </motion.div>
          <motion.div
            key={'blur'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={
              'z-40 fixed top-0 right-0 w-full min-h-screen bg-black/70 backdrop-blur-sm'
            }
            onClick={() => setCartActive(false)}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
