import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (project) => {
    const searchArray = cart.filter((item) => {
      if (item.id === project.id) {
        return item;
      }
    });
    if (searchArray.length === 0)
      setCart((prev) =>
        prev.concat({ id: project.id, price: project.price, qty: 1 })
      );
    if (searchArray.length > 0) changeQty(project.id, 'add');
  };

  const changeQty = (id, increment) => {
    setCart((prev) =>
      prev.map((product) => {
        if (product.id === id) {
          if (increment == 'add') {
            product.qty = product.qty + 0.5;
          } else if (increment == 'remove' && product.qty > 0) {
            product.qty = product.qty - 0.5;
          }
        }
        return product;
      })
    );
  };

  const removeProduct = (id) => {
    setCart((prev) =>
      prev.filter((product) => {
        if (product.id != id) {
          return product;
        }
      })
    );
  };

  return { cart, addToCart, changeQty, removeProduct };
};

export default useCart;
