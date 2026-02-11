import { useState, useEffect } from "react";

export function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const skip = (page - 1) * itemsPerPage;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`,
      );
      const data = await response.json();
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / itemsPerPage));
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            padding: "8px 12px",
            margin: "0 4px",
            cursor: "pointer",
            backgroundColor: currentPage === i ? "#61dafb" : "#444",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: currentPage === i ? "bold" : "normal",
          }}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "30px", color: "#61dafb" }}>Products</h1>

      {loading ? (
        <div style={{ fontSize: "24px", marginTop: "50px" }}>Loading...</div>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
              width: "100%",
              maxWidth: "1200px",
              marginBottom: "30px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: "#3a3f47",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
                  {product.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#aaa",
                    marginBottom: "8px",
                  }}
                >
                  {product.description.substring(0, 80)}...
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#61dafb",
                    }}
                  >
                    ${product.price}
                  </span>
                  <span style={{ fontSize: "14px", color: "#ffd700" }}>
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                padding: "8px 16px",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                backgroundColor: currentPage === 1 ? "#555" : "#61dafb",
                color: "white",
                border: "none",
                borderRadius: "4px",
                opacity: currentPage === 1 ? 0.5 : 1,
              }}
            >
              Previous
            </button>

            {renderPageNumbers()}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                padding: "8px 16px",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                backgroundColor:
                  currentPage === totalPages ? "#555" : "#61dafb",
                color: "white",
                border: "none",
                borderRadius: "4px",
                opacity: currentPage === totalPages ? 0.5 : 1,
              }}
            >
              Next
            </button>
          </div>

          <div style={{ marginTop: "15px", fontSize: "14px", color: "#aaa" }}>
            Page {currentPage} of {totalPages}
          </div>
        </>
      )}
    </div>
  );
}
