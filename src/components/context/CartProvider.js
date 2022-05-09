import React, { useContext, useState, createContext, useEffect } from 'react';

// creo un context
export const CartContext = createContext();
// creamos un hook personalizado que devuelve el hook usecontext con el cartcontext
export const useCartContext = () => {
  return useContext(CartContext);
};
//

// recibo los childrens como props
export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState(
    JSON.parse(localStorage.getItem('shoppingCart')) || []
  );
  //
  // locale storage
  //
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  // agregar producos\

  const addItem = (product) => {
    let isInCart = itemsInCart.find(
      (item) => item.productId === product.productId
    );

    isInCart
      ? setItemsInCart(
          itemsInCart.map((item) =>
            item.productId === product.productId
              ? { ...isInCart, qty: isInCart.qty + 1 }
              : item
          )
        )
      : setItemsInCart([...itemsInCart, { ...product, qty: 1 }]);
  };
  // sumar cantidades

  const getQuantityItemsInCart = () => {
    const totalItemsInCart = itemsInCart
      .map((e) => e.qty)
      .reduce((prev, curr) => prev + curr, 0);
    return totalItemsInCart;
  };

  // declaro a carritociontext como proveedeor con provider
  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addItem,
        getQuantityItemsInCart,
      }}
    >
      {/* declaro a quien voy a enviar la informacion con childrens */}
      {children}
    </CartContext.Provider>
  );
};
