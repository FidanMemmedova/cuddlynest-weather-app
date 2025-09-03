import { useQuery } from "@tanstack/react-query";
import getWeatherData from "../Store/services/weatherService";
import type { ForecastItem } from "../Types/ForecastItem";

const useWeatherFetch = () => {
  const { data, error, isLoading } = useQuery<ForecastItem[], Error>({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const result = await getWeatherData();
      return result.sort((a, b) => a.city.name.localeCompare(b.city.name));
    },
    staleTime: 5 * 60 * 1000, 
    retry: 1, 
  });

  return { data, error, isLoading };
};

export default useWeatherFetch;
