import React from "react";
import { motion } from "framer-motion";
import "./HeartMessageScreen.css";

import sorryGif from "../../../assets/gifs/sorry.gif";

const HeartMessageScreen = ({ onNext }) => {
  return (
    <div className="heart-screen-container">
      {/* Glow */}
      <div className="pink-glow"></div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>💗</span>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="heart-content"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* GIF */}
        <motion.img
          src={sorryGif}
          alt="Sad Cat"
          className="sad-cat-gif"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        {/* Main Text */}
        <h1 className="main-title">I Messed Up, Amruta 😢</h1>

        {/* Subtitle */}
        <p className="subtitle">But I'm ready to make it right.</p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="heart-btn"
          onClick={onNext}
        >
          Listen to my heart 💝
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeartMessageScreen;
