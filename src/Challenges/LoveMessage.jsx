import React from "react";
import herImage from "../assets/amruta1.jpeg"; // replace with your actual image path

export const LoveMessage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <img
        src={herImage}
        alt="Amruta"
        style={{
          maxWidth: "90%",
          maxHeight: "70vh",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />
      <h2
        style={{
          marginTop: "20px",
          color: "white",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        I ❤️ You Amruta
        <br />
        Sorry mi ase vendhale pana karayla nako hota
        <br />
        Please babu mala maaf kar mi khup prem karato tujhyavar va ase nahi
        karnar parat
      </h2>
    </div>
  );
};
