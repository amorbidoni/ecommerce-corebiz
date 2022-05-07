import React, { useState } from 'react';

import { Item } from './Item';
import './itemList.scss';
export const ItemList = ({ products }) => {
  const [scrollDot, setScrollDot] = useState('first');
  const handleScroll = (event) => {
    let totalWidth = (products.length - 2) * 212;
    let parcialWidth = totalWidth / 4;
    let scrollLeft = event.target.scrollLeft;
    if (scrollLeft < parcialWidth) {
      setScrollDot('first');
    } else if (scrollLeft > parcialWidth && scrollLeft < parcialWidth * 2) {
      setScrollDot('second');
    } else if (scrollLeft > parcialWidth * 2 && scrollLeft < parcialWidth * 3) {
      setScrollDot('third');
    } else if (scrollLeft > parcialWidth * 3) {
      setScrollDot('fourth');
    }
  };
  return (
    <div className="list-container">
      <div className="item-list" onScroll={handleScroll}>
        {products.map((p) => (
          <Item product={p} key={p.productId} />
        ))}
      </div>
      <div className={`scroll-dots ${scrollDot}`}>
        <p>●</p>
        <p>●</p>
        <p>●</p>
        <p>●</p>
      </div>
    </div>
  );
};
