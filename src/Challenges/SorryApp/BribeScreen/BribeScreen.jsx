import React from "react";
import { motion } from "framer-motion";
import "./BribeScreen.css";

import flowerImg from "../../../assets/gifs/flowers.jpg";
import teddyImg from "../../../assets/gifs/teddy.jpg";
import chocolateImg from "../../../assets/gifs/chocolate.jpg";

const bribes = [
  {
    image: flowerImg,
    title: "FRESH BLOOMS 🌸",
    desc: "Valid for 1 bouquet delivery + unlimited forehead kisses 💕",
  },
  {
    image: teddyImg,
    title: "CUDDLE PASS 🧸",
    desc: "Valid for unlimited hugs, cuddles & no drama day 🥰",
  },
  {
    image: chocolateImg,
    title: "SWEET TREAT 🍫",
    desc: "Valid for your favorite chocolate + my full attention 😊",
  },
];

const BribeScreen = ({ onNext }) => {
  return (
    <div className="bribe-container">
      <div className="pink-glow"></div>

      <div className="floating-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>💗</span>
        ))}
      </div>

      <div className="bribe-content">
        {bribes.map((item, index) => (
          <motion.div
            key={index}
            className="bribe-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.25,
            }}
          >
            <img src={item.image} alt={item.title} className="bribe-image" />

            <h2>{item.title}</h2>

            <p>{item.desc}</p>
          </motion.div>
        ))}

        <motion.button
          className="bribe-btn"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          onClick={onNext}
        >
          ENOUGH BRIBES!
        </motion.button>
      </div>
    </div>
  );
};

export default BribeScreen;
