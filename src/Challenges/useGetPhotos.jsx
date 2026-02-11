import { useEffect, useState } from "react";

export const useGetPhotos = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const getPhotos = async () => {
    try {
      setLoading(true);
      setError("");

      const resp = await fetch("https://jsonplaceholder.typicode.com/photos");

      if (!resp.ok) {
        throw new Error("failed to fetch photos");
      }

      const result = await resp.json();
      console.log(result);
      setData(result);
    } catch (error) {
      setError("Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   getPhotos();
  // }, []);

  return {
    loading,
    data,
    error,
    getPhotos,
  };
};
