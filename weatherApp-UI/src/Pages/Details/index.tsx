import { useParams } from "react-router-dom";
import useWeatherFetch from "../../Hooks/useWeatherFetch";
import CityCard from "../Home/Blocks/CityCards/CityCard";

const CityDetails = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { data: weatherData, isLoading, error } = useWeatherFetch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weatherData) return null;

  const cityForecast = weatherData.filter(
    item => item.city.name === cityName
  );

  return (
    <div>
      <h2>{cityName} Forecast</h2>
      {cityForecast.map(item => (
        <CityCard
          key={item.date}
          imageSrc={item.city.picture}
          cityName={item.city.name}
          time={item.date}
          temperature={item.temp}
          tempType={item.tempType}
        />
      ))}
    </div>
  );
};

export default CityDetails;
