import React, { useState } from "react";
import useStore from "./store";

const WeatherApp = () => {
  const { weather, loading, error, setCity, fetchWeather } = useStore();
  const [inputCity, setInputCity] = useState("");

  const handleFetchWeather = () => {
    setCity(inputCity);
    fetchWeather(inputCity);
  };

  return (
    <div>
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="도시 이름을 영어로 검색해보세요"
      />
      <button onClick={handleFetchWeather}>검색</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>온도: {weather.main.temp}°C</p>
          <p>날씨: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
