import { useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [cartActive, setCartActive] = useState(false);

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
        const newProduct = { ...product };
        if (product.id === id) {
          if (increment == 'add') {
            newProduct.qty = newProduct.qty + 1;
          } else if (increment == 'remove' && product.qty > 0) {
            newProduct.qty = newProduct.qty - 1;
          }
        }
        return newProduct;
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

  return {
    cart,
    addToCart,
    changeQty,
    removeProduct,
    cartActive,
    setCartActive,
  };
};

export default useCart;
