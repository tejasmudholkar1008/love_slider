import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ForgivenessMeterScreen.css";

import sorryBearGif from "../../../assets/gifs/sorry-na.gif";
import forgivenGif from "../../../assets/gifs/forgiven.gif";
import { p } from "framer-motion/client";

const ForgivenessMeterScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    if (progress < 100) {
      setProgress((prev) => Math.min(prev + 10, 100));
    }
  };

  return (
    <div className="forgive-container">
      {/* Glow */}
      <div className="pink-glow"></div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>💗</span>
        ))}
      </div>

      {/* Card */}
      <motion.div
        className="forgive-card"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h1 className="forgive-title">FORGIVENESS METER ❤️</h1>

        {/* GIF */}
        <motion.img
          src={progress === 100 ? forgivenGif : sorryBearGif}
          alt="sorry"
          className="sorry-gif"
          animate={{
            y: [0, -8, 0],
            scale: progress === 100 ? [1, 1.05, 1] : 1,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <motion.div
            className="progress-fill"
            initial={{ width: "10%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Percentage */}
        <motion.h2
          key={progress}
          className="percentage-text"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {progress}% FORGIVEN
        </motion.h2>

        {progress !== 100 ? (
          <>
            {" "}
            {/* Subtitle */}
            <p className="tap-text">TAP THE HEART TO HEAL MY HEART!</p>
            {/* Heart Button */}
            <motion.button
              className="heart-button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleIncrease}
              disabled={progress === 100}
            >
              ❤️
            </motion.button>
            {/* Final Message */}
            {progress === 100 && (
              <motion.p
                className="done-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Yayyy!! You forgave me 🥺💕
              </motion.p>
            )}
          </>
        ) : (
          <div className="forgiven-section">
            <motion.p
              className="done-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              YOU'RE FORGIVEN! 💕
            </motion.p>

            <motion.button
              className="continue-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Continue 💌
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ForgivenessMeterScreen;
