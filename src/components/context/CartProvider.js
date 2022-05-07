import React, { useContext, useState, createContext } from 'react';
import { useCounter } from '../../hooks/useCounter';

// creo un context
export const CartContext = createContext();
// creamos un hook personalizado que devuelve el hook usecontext con el cartcontext
export const useCartContext = () => {
  return useContext(CartContext);
};
//

// recibo los childrens como props
export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  // agregar producos

  const { counter, increment } = useCounter();
  const addItem = (item, qty) => {
    increment();
    setItemsInCart([...itemsInCart, { ...item, qty }]);
  };
  // sumar cantidades
  // sumar cantidades
  const getQuantityItemsInCart = () => {
    return counter;
  };

  // declaro a carritociontext como proveedeor con provider
  return (
    <CartContext.Provider
      value={{
        addItem,

        getQuantityItemsInCart,
      }}
    >
      {/* declaro a quien voy a enviar la informacion con childrens */}
      {children}
    </CartContext.Provider>
  );
};
