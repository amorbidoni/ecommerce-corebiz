import React, { useState } from 'react';
import img from '../../assets/images';
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
  const container = document.getElementById('item-list');

  const [scrollInterval, setScrollInterval] = useState(100);
  const scrollRight = () => {
    container.scrollTo(scrollInterval, 0, 'smooth');
    setScrollInterval(scrollInterval + 100);
  };
  const scrollLeft = () => {
    container.scrollTo(0, 0, 'smooth');
  };
  return (
    <div className="list-container">
      <div className="list-container__title">
        <h2 className="title-primary title-primary--black fz-m">
          Más Vendidos
        </h2>
      </div>
      <div className="row">
        <div className="arrow arrow-left" onClick={scrollLeft}>
          <img src={img.angleLeft} alt="left" />
        </div>
        <div id="item-list" className="item-list" onScroll={handleScroll}>
          {products.map((p) => (
            <Item product={p} key={p.productId} />
          ))}
        </div>
        <div className="arrow arrow-right">
          <img src={img.angleRight} alt="right" onClick={scrollRight} />
        </div>
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
