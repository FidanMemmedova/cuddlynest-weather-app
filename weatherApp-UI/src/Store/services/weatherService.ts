import { GET_WEATHER } from "../../Data/ServiceRoutes/weather";
import type { ForecastItem } from "../../Types/ForecastItem";
import { serviceFetch } from "../serviceFetch";


const getWeatherData = async (): Promise<ForecastItem[]> => {
    return serviceFetch(GET_WEATHER, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Origin": "http://localhost:3000",
            "X-Requested-With": "XMLHttpRequest",
        },
    });
};

export default getWeatherData;