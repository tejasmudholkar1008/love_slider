import React from "react";
import "./CuteGif.css";

const CuteGif = ({ gif }) => {
  return (
    <div className="gif-wrapper">
      <img src={gif} alt="cute gif" className="cute-gif" />
    </div>
  );
};

export default CuteGif;
