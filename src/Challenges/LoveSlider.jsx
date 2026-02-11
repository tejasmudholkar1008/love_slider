import React, { useEffect, useState } from "react";
import img1 from "../assets/amruta1.jpeg";
import img2 from "../assets/amruta2.jpeg";
import img3 from "../assets/amruta3.jpeg";

const slides = [
  { image: img1, message: "I ❤️ Amruta" },
  { image: img2, message: "Tejas ❤️ Amruta" },
  { image: img3, message: "Amruta Mudholkar ❤️" },
];

export const LoveSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={slides[currentIndex].image}
        alt="Amruta"
        style={{
          maxWidth: "90%",
          maxHeight: "70vh",
          borderRadius: "14px",
          objectFit: "cover",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      <h2
        style={{
          marginTop: "20px",
          color: "white",
          fontFamily: "sans-serif",
          textAlign: "center",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {slides[currentIndex].message}
      </h2>

      {/* Dots */}
      <div style={{ marginTop: "15px", display: "flex", gap: "8px" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "white" : "gray",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};
