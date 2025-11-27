import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeatherByCity } from "./api/weather";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);

const searchWeather = async () => {
  try {
    const response = await getWeatherByCity(city);
    console.log("SUCCESS:", response.data);
    setWeather(response.data);
  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
    alert("City not found or API error!");
  }
};

  return (
    <div className="app-container">
      <h1>Weather App</h1>

      <SearchBar city={city} setCity={setCity} onSearch={searchWeather} />

      <WeatherCard data={weather} />
    </div>
  );
}

export default App;
