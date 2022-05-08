import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { Loader } from '../loader/Loader';
import { ItemList } from './ItemList';
export const ItemListContainer = ({ categories = true }) => {
  let { categoryId } = useParams();
  const { products, loading, setLoading, getItems } = useApi();
  useEffect(() => {
    setLoading(true);
    getItems();
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="item-list-container">
          <ItemList products={products} />
        </section>
      )}
    </>
  );
};
