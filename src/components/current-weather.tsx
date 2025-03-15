import {
  Cloud,
  CloudRain,
  Droplets,
  Eye,
  MapPin,
  Sunrise,
  Sunset,
  Wind,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatTime } from "@/lib/utils";
import { useUserLocation } from "@/hooks/use-user-location";
import { useWeather } from "@/hooks/use-weather";

export default function CurrentWeather() {
  const { location } = useUserLocation();

  const { data, isLoading, error } = useWeather(
    location?.lat || 27.7103,
    location?.lon || 85.3222
  );

  if (error) return <p>Error fetching weather data</p>;

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {isLoading ? (
          <LoadingState />
        ) : data ? (
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  <MapPin className="h-5 w-5" />
                  {data.name}, {data.sys.country}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6 flex items-end justify-between">
                  <div>
                    <p className="text-5xl font-bold">{data.main.temp}°C</p>
                    <p className="text-muted-foreground">
                      {data.weather[0]?.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      Feels like:{" "}
                      <span className="font-medium">
                        {data.main.feels_like}°C
                      </span>
                    </p>
                    <p className="text-sm">
                      Min:{" "}
                      <span className="font-medium">
                        {data.main.temp_min}°C
                      </span>
                    </p>
                    <p className="text-sm">
                      Max:{" "}
                      <span className="font-medium">
                        {data.main.temp_max}°C
                      </span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Humidity</p>
                      <p className="font-medium">{data.main.humidity}%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Wind</p>
                      <p className="font-medium">{data.wind.speed} m/s</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Visibility
                      </p>
                      <p className="font-medium">{data.visibility / 1000} km</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Cloudiness
                      </p>
                      <p className="font-medium">{data.clouds.all}%</p>
                    </div>
                  </div>
                </div>

                {data.rain && data.rain["1h"] && (
                  <div className="mt-4 rounded-md bg-primary/10 p-3">
                    <div className="flex items-center gap-2">
                      <CloudRain className="h-5 w-5 text-primary" />
                      <p className="font-medium">
                        Rainfall: {data.rain["1h"]} mm in last hour
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-md p-3">
                  <div className="flex items-center gap-2">
                    <Sunrise className="h-5 w-5 text-primary" />
                    <p>Sunrise</p>
                  </div>
                  <p className="font-medium">
                    {formatTime(data.sys.sunrise, data.timezone)}
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-md p-3">
                  <div className="flex items-center gap-2">
                    <Sunset className="h-5 w-5 text-primary" />
                    <p>Sunset</p>
                  </div>
                  <p className="font-medium">
                    {formatTime(data.sys.sunset, data.timezone)}
                  </p>
                </div>

                <div className="flex items-center justify-between rounded-md p-3">
                  <p>Pressure</p>
                  <p className="font-medium">{data.main.pressure} hPa</p>
                </div>

                <div className="flex items-center justify-between rounded-md p-3">
                  <p>Coordinates</p>
                  <p className="font-medium">
                    {data.coord.lat.toFixed(2)}° N, {data.coord.lon.toFixed(2)}°
                    E
                  </p>
                </div>

                <div className="mt-4 rounded-md bg-primary/10 p-3">
                  <p className="text-sm text-muted-foreground">
                    Data provided by OpenWeather API
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Last updated:{" "}
                    {new Date(data.dt * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card>
            <CardContent className="p-6">
              <p>No weather data available</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <Skeleton className="h-12 w-24" />
              <Skeleton className="mt-2 h-4 w-32" />
            </div>
            <div className="text-right">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="mt-2 h-4 w-24" />
              <Skeleton className="mt-2 h-4 w-24" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <div>
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="mt-1 h-4 w-12" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
