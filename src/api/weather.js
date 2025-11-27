import axios from "axios";

const API_KEY = "34679cfd53ef6b7ad753c1a89bd516de"; 

export const getWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  return axios.get(url);
};
