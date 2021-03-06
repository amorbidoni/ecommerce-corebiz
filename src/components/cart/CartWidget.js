import React from 'react';
import './cart.scss';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider';

export const CartWidgetApp = ({ counter }) => {
  const { getQuantityItemsInCart } = useCartContext();

  return (
    <>
      <Link to={'/carrito-de-compras'}>
        <div className="cart">
          {getQuantityItemsInCart() !== 0 ? (
            <div id="cart-counter" className="cart__counter">
              <p>{getQuantityItemsInCart()}</p>
            </div>
          ) : (
            <div id="cart-counter" className="cart__counter">
              <p>{0}</p>
            </div>
          )}

          {/* <div className="cart__product">
            <svg
              id="product-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M507.31 72.57L439.43 4.69c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l-76.67 76.67c-46.58-19.7-102.4-10.73-140.37 27.23L18.75 312.23c-24.99 24.99-24.99 65.52 0 90.51l90.51 90.51c24.99 24.99 65.52 24.99 90.51 0l158.39-158.39c37.96-37.96 46.93-93.79 27.23-140.37l76.67-76.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.24-6.24 6.24-16.37-.01-22.62zM179.22 423.29l-90.51-90.51 122.04-122.04 90.51 90.51-122.04 122.04z" />
            </svg>
          </div> */}
          <div className="cart__img">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160zm-91.923-59.515l-51.029 51.029c-4.686 4.686-12.284 4.686-16.971 0l-51.029-51.029c-7.56-7.56-2.206-20.485 8.485-20.485H312v-52c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12v52h27.029c10.691 0 16.045 12.926 8.486 20.485z" />
            </svg>
          </div>
        </div>
      </Link>
    </>
  );
};
