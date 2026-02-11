import { useState } from "react";
import { useGetPhotos } from "./useGetPhotos";

const PAGE_SIZE = 5;

export const ProductsApi = () => {
  const { loading, error, data, getPhotos } = useGetPhotos();
  const [visibleCount, setVisibleCount] = useState(0);

  const handleGetData = () => {
    if (data?.length) {
      setVisibleCount((prev) => prev + PAGE_SIZE);
    } else {
      getPhotos();
      setVisibleCount(PAGE_SIZE);
    }
  };

  return (
    <>
      <button onClick={handleGetData} disabled={loading}>
        {loading ? "Loading..." : "Get Data"}
      </button>

      {error && <p>{error}</p>}

      {!loading && data?.length === 0 && <p>No data found</p>}

      {data?.slice(0, visibleCount).map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </>
  );
};
