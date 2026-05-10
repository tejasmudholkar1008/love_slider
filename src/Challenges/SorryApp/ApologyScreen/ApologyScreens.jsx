import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CuteGif from "../Gif/CuteGif";
import "./ApologyScreens.css";
import cryGif from "../../../assets/gifs/cry.gif";
import hugGif from "../../../assets/gifs/forever-us.gif";
import loveGif from "../../../assets/gifs/love.gif";
import sadGif from "../../../assets/gifs/sad.gif";

const screens = [
  {
    gif: sadGif,
    title: "I Know I Hurt You",
    message: "I messed up... and I'm really sorry for that.",
  },
  {
    gif: loveGif,
    title: "You Mean Everything",
    message: "Seeing you upset hurts me more than anything.",
  },
  {
    gif: cryGif,
    title: "Please Forgive Me",
    message: "I promise to love you better every single day ❤️",
  },
  {
    gif: hugGif,
    title: "Forever Us",
    message: "No matter what happens... it's always you & me 💕",
  },
];

const ApologyScreens = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);

  const nextScreen = () => {
    if (current < screens.length - 1) {
      setCurrent(current + 1);
    } else {
      onFinish?.();
    }
  };

  const prevScreen = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="apology-container">
      {/* Pink Glow */}
      <div className="pink-glow"></div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}>💗</span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="content-box"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          {/* GIF */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <CuteGif gif={screens[current].gif} />
          </motion.div>

          {/* Title */}
          <h1>{screens[current].title}</h1>

          {/* Message Card */}
          <div className="message-card">
            <p>{screens[current].message}</p>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button
              className="back-btn"
              onClick={prevScreen}
              disabled={current === 0}
            >
              ← Back
            </button>

            <button className="next-btn" onClick={nextScreen}>
              {current === screens.length - 1 ? "Finish ❤️" : "Next →"}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ApologyScreens;
