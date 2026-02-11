import React, { useEffect, useState } from "react";
import img1 from "../assets/amruta1.jpeg";
import img2 from "../assets/amruta2.jpeg";
import img3 from "../assets/amruta3.jpeg";
import myPic from "../assets/tejas.jpeg";
import img4 from "../assets/amruta4.jpeg";
import img5 from "../assets/amruta5.jpeg";
import img6 from "../assets/amruta6.jpeg";
import "./LoveSliderNew.css";

const slides = [
  { image: img1, message: "I ❤️ Amruta" },
  { image: img2, message: "Tejas ❤️ Amruta" },
  { image: img3, message: "Amruta Mudholkar ❤️" },

  { image: img4, message: "Your smile is my favorite 💕" },
  { image: img5, message: "Forever my happiness 💖" },
  { image: img6, message: "You are my world 🌍❤️" },

  { image: myPic, message: "Tejas ❤️ Amruta Forever 💞" },
];

export const LoveSliderNew = () => {
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
    <div className="love-container">
      {/* Floating Hearts */}
      <div className="hearts">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>

      <div className={`slide ${fade ? "show" : "hide"}`}>
        <img src={slides[currentIndex].image} alt="Amruta" />
        <h2>{slides[currentIndex].message}</h2>
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
