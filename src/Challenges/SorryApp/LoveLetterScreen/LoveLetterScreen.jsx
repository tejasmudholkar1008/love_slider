import React from "react";
import { motion } from "framer-motion";
import "./LoveLetterScreen.css";

const LoveLetterScreen = ({ onOpen }) => {
  return (
    <div className="love-screen">
      {/* Animated Pink Glow */}
      <div className="pink-glow"></div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}>💗</span>
        ))}
      </div>

      {/* Center Content */}
      <motion.div
        className="center-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Envelope */}
        <motion.div
          className="envelope-wrapper"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
        >
          <motion.div
            className="envelope"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <div className="envelope-top"></div>
            <div className="envelope-body"></div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.h1
          className="open-text"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          CLICK TO OPEN ❤️
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default LoveLetterScreen;
