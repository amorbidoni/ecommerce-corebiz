import axios from 'axios';
import { useState } from 'react';

export const useApi = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseUrl = `https://corebiz-test.herokuapp.com`;

  const getItems = async () => {
    const _url = `${baseUrl}/api/v1/products`;
    try {
      const response = await axios({
        method: 'get',
        url: _url,
      });

      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      throw new Error(`Error en la peticion getItems: ${error}`);
    }
  };

  return { products, loading, setLoading, getItems, setProducts };
};
