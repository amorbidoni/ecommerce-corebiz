import React, { memo } from 'react';
import { Stars } from './stars/Stars';
import './item.scss';

import { useCartContext } from '../context/CartProvider';

export const Item = memo(({ product }) => {
  const getPriceWithDecimals = (price) => {
    const myNumber = price / 100;
    return parseFloat(myNumber).toFixed(2);
  };

  const { addItem } = useCartContext();

  const onAdd = (product) => {
    addItem(product);
  };

  return (
    <div className="product">
      <div className="product__image">
        <img src={product.imageUrl} alt={product.productName} />
        {product.listPrice && (
          <div className="product__off">
            <p>OFF</p>
          </div>
        )}
      </div>
      <div className="product__data">
        <p className="product__data--title">{product.productName}</p>
        <div className="product__data--stars">
          <Stars raiting={product.stars} />
        </div>
        {product.listPrice ? (
          <p className="product__data--list-price">
            ${getPriceWithDecimals(product.listPrice)}
          </p>
        ) : (
          <p className="product__data--list-price"></p>
        )}
        <p className="product__data--price">
          por ${getPriceWithDecimals(product.price)}
        </p>
        {product.installments[0] ? (
          <p className="product__data--installments">
            ou em {product.installments[0].quantity}x R${' '}
            {getPriceWithDecimals(product.installments[0].value)}
          </p>
        ) : (
          <p className="product__data--installments"></p>
        )}
        <div className="product__btn">
          <button
            onClick={() => {
              onAdd(product);
            }}
            className="myBtn myBtn__primary-m"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
});
