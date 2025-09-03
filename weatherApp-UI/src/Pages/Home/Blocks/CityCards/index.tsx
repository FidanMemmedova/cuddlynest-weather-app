import { Link } from "react-router-dom";
import CityCard from "./CityCard";
import style from "./CityCards.module.scss";
import useWeatherFetch from "../../../../Hooks/useWeatherFetch";

const Home = () => {
  const { data: weatherData, isLoading, error } = useWeatherFetch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weatherData) return null;

  return (
    <div className={style.cityCards}>
      {weatherData.map(item => (
        <Link
          key={item.city.name}
          className={style.cityLink}
          to={`/city/${encodeURIComponent(item.city.name)}`}
        >
          <CityCard
            imageSrc={item.city.picture}
            cityName={item.city.name}
            // time={item.date}
            // temperature={item.temp}
            // tempType={item.tempType}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
