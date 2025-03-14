import { fetchWeatherByCity } from "@/services/weather-api";
import { useQuery } from "@tanstack/react-query";

export const useWeatherByCity = (city: string) => {
  return useQuery({
    queryKey: ["weather", "city", city],
    queryFn: () => fetchWeatherByCity(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
  });
};
