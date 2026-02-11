import { useState, useEffect } from "react";

export const ScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = screenWidth <= 768;

  return (
    <div>{isMobile ? <p>Mobile Screen</p> : <p>Desktop / Web browser</p>}</div>
  );
};
