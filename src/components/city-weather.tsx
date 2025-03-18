import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { formatDate, getWeatherIcon } from "@/lib/utils";
import { useWeatherByCity } from "@/hooks/use-weather-by-city";
import { AxiosError } from "axios";

const CityWeather = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const cityParam = query.get("city") || "";

  const [city, setCity] = useState(cityParam);

  const { data, error, isLoading } = useWeatherByCity(city);

  useEffect(() => {
    setCity(cityParam);
  }, [cityParam]);

  if (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
      return <NoData message="No city found" />;
    }
    return <NoData message="Error fetching data" />;
  }
  if (isLoading) return <NoData message="Loading..." />;
  if (!data) return <NoData message="No city found" />;

  return (
    <div className="p-6">
      <Card className="px-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {data.name}, {data.sys.country}
            </CardTitle>
            <CardDescription>
              {formatDate(data.dt, data.timezone)}
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="w-[100px]"
              src={getWeatherIcon(data.weather[0].icon)}
            />
            <div>
              <p className="text-xl font-bold">{data.main.temp}°C</p>
              <p className="text-muted-foreground">
                {data.weather[0]?.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CityWeather;

const NoData = ({ message }: { message: string }) => (
  <div className="p-6">
    <Card className="px-4">
      <div className="flex items-center justify-between">{message}</div>
    </Card>
  </div>
);
