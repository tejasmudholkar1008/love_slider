import React from "react";
import { motion } from "framer-motion";
import "./PeaceTreatyScreen.css";

import img1 from "../../../assets/gifs/at1.jpeg";
import img2 from "../../../assets/gifs/at2.jpeg";
import img3 from "../../../assets/gifs/at3.jpeg";

const PeaceTreatyScreen = () => {
  return (
    <div className="peace-container">
      <div className="pink-glow"></div>

      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>💗</span>
        ))}
      </div>

      <div className="peace-card">
        {/* Images */}
        <div className="memory-grid">
          <motion.img
            src={img1}
            className="memory-img rotate-left"
            whileHover={{ scale: 1.05 }}
          />

          <motion.img
            src={img2}
            className="memory-img rotate-right"
            whileHover={{ scale: 1.05 }}
          />

          <motion.img
            src={img3}
            className="memory-img center-img"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Text */}
        <h1>PEACE TREATY SIGNED! 🕊️</h1>

        <h2>NEW BEGINNINGS AHEAD</h2>

        <p>
          Thank you for being the most forgiving and wonderful person. I love
          you to the moon and back and I'm never letting go! 💚🙏
        </p>

        <div className="hearts-row">❤️ ❤️ ❤️ ❤️ ❤️</div>
      </div>
    </div>
  );
};

export default PeaceTreatyScreen;
