import { useState, useEffect } from "react";
export const DotNetApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7092/weatherforecast")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>Weather Data</h2>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            <p>Date: {item.date}</p>
            <p>Temperature: {item.temperatureC}</p>
            <p>Summary: {item.summary}</p>
          </div>
        );
      })}
    </>
  );
};
