import React from "react";

export default function WeatherCard({ data }) {
  if (!data) return null;

  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <img src={iconUrl} alt="weather icon" />
      <h3>{data.weather[0].main}</h3>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Feels Like: {data.main.feels_like}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}
