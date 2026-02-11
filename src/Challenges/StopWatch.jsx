import { useEffect, useState, useRef } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  useEffect(() => {
    return clearInterval(intervalRef.current);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:
            ${minutes.toString().padStart(2, "0")}:
            ${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#282c34",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontSize: "4.5rem",
          color: "#61dafb",
          margin: "40px 0",
          fontWeight: "300",
        }}
      >
        {formatTime(time)}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
        }}
      >
        <button
          onClick={start}
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
          }}
        >
          Start
        </button>
        <button
          onClick={pause}
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
          }}
        >
          Pause
        </button>
        <button
          onClick={reset}
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
