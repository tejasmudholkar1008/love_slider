import React, { useState, useEffect } from "react";

export const useGetTodos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTodos = async () => {
    console.log("getTodos");
    try {
      setLoading(true);
      const resp = await fetch("https://dummyjson.com/todos");
      console.log(resp);
      const result = await resp.json();
      console.log(result);
      setData(result);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    getTodos,
  };
};
