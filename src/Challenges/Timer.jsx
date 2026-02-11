import { useState, useEffect } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  let hours = String(time.getHours()).padStart(2, "0");
  let minutes = String(time.getMinutes()).padStart(2, "0");
  let seconds = String(time.getSeconds()).padStart(2, "0");

  return (
    <h1>
      {hours}:{minutes}:{seconds}
    </h1>
  );
};
