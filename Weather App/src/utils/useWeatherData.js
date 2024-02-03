import { useEffect, useState } from "react";
import { WEATHER_API } from "./constant";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(WEATHER_API);
      const json = await data.json();
      setWeatherData(json);
    };
    getData();
  }, []);

  return weatherData;
};

export default useWeatherData;
