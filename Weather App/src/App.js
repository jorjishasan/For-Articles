import ReactDOM from "react-dom/client";
import useWeatherData from "./utils/useWeatherData";

const App = () => {
  const weatherData = useWeatherData();

  return (
    <div>
      <h2>Temp: {Math.round(weatherData?.main?.temp - 273.15)}℃</h2>
      <h2>Humidity: {weatherData?.main?.humidity}</h2>
      <h2>Pressure: {weatherData?.main?.pressure}</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
