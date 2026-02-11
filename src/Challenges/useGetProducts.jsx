import { useState, useEffect } from "react";

export const useGetProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch("url");
      const result = await resp.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return {
    data,
    isLoading,
    error,
    getProducts,
  };
};

const { getProducts } = useGetProducts();
