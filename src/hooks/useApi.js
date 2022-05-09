import axios from 'axios';
import { useState } from 'react';

export const useApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = `https://corebiz-test.herokuapp.com`;

  const getItems = async () => {
    try {
      const _url = `/api/v1/products`;
      const response = await axios({
        method: 'get',
        baseURL: baseUrl,
        url: _url,
      });

      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      throw new Error(`Error en la peticion getItems: ${error}`);
    }
  };

  const newsLetterSubscription = async (body) => {
    try {
      const _url = `/api/v1/newsletter`;
      await axios({
        method: 'post',
        baseURL: baseUrl,
        url: _url,
        data: body,
      });
      setLoading(false);
    } catch (error) {
      throw new Error(`Error en la peticion newsLetterSubscription: ${error}`);
    }
  };

  return {
    products,
    loading,
    setLoading,
    getItems,
    setProducts,
    newsLetterSubscription,
  };
};
