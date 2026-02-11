import { useState, useRef, useEffect } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggleProgress = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
      return;
    }

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsRunning(false);
          return 100;
        }
        return prev + 1;
      });
    }, 100); // speed
  };

  // cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <div
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "green",
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <p style={{ textAlign: "center", margin: "10px 0" }}>{progress}%</p>

      <button onClick={toggleProgress} style={{ width: "100%" }}>
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};
