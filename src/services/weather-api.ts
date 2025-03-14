import { API_KEY } from "@/config/env";
import { WeatherData } from "@/types/types";
import axios from "axios";

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (lat: number, lon: number) => {
  const { data } = await axios.get(API_BASE_URL, {
    params: { lat, lon, appid: API_KEY, units: "metric" },
  });
  return data;
};

export const fetchWeatherByCity = async (city: string) => {
  if (!city) return null;

  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return data as WeatherData;
};
