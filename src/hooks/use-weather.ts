import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/weather-api";

export const useWeather = (lat: number, lon: number) => {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather(lat, lon),
    staleTime: 1000 * 60 * 5,
    retry: 2,
    refetchOnWindowFocus: false,
  });
};
