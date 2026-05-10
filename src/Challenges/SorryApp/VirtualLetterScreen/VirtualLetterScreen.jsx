import React from "react";
import { motion } from "framer-motion";
import "./VirtualLetterScreen.css";

import angryCatImage from "../../../assets/gifs/angry-cat.jpg";

const lines = [
  "My Dearest Amruta,",
  "",
  "I'm really sorry, my love.",
  "I accidentally upset the most precious",
  "and adorable person in my life — you. 🥺",
  "",
  "Please forgive me if I hurt you",
  "or wasted even a little of your precious time.",
  "",
  "I promise I didn't mean to. 🥺💕",
];

const VirtualLetterScreen = ({ onNext }) => {
  return (
    <div className="virtual-letter-container">
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
        className="virtual-letter-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <motion.h1
          className="virtual-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A VIRTUAL PEACE OFFERING ❤️
        </motion.h1>

        {/* Letter Box */}
        <div className="letter-box">
          {/* Animated Lines */}
          <div className="letter-content">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 1,
                  duration: 0.8,
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* IMAGE */}
          <motion.img
            src={angryCatImage}
            alt="cat"
            className="letter-gif"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
              x: [-6, 6, -6],
              rotate: [-1, 1, -1],
            }}
            transition={{
              opacity: {
                delay: lines.length * 0.7,
                duration: 0.8,
              },
              scale: {
                delay: lines.length * 0.7,
                duration: 0.8,
              },
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              },
              x: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              },
              rotate: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* Button */}
        <motion.button
          className="continue-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: lines.length * 0.8 + 1,
          }}
        >
          Continue 💌
        </motion.button>
      </motion.div>
    </div>
  );
};

export default VirtualLetterScreen;
