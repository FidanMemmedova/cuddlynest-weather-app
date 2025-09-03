import { formatDateTime, translateToCelcius } from "../../../../../Helpers/helpers";
import type { ForecastItem } from "../../../../../Types/ForecastItem";
import style from "./CityCard.module.scss"

interface ICityCardProps {
    imageSrc: string;
    cityName: string;
    time?: string;
    temperature?: number;
    tempType?: ForecastItem["tempType"]
}
const CityCard = ({ imageSrc, cityName, time, temperature, tempType }: ICityCardProps) => {
    return (
        <div className={style.cityCard}>
            <div className={style.cityInfo}>
                <img className={style.cityImage} src={imageSrc} alt={cityName} />
                <div>
                    <p className={style.cityName}>{cityName}</p>
                 {time && <p className={style.cityTime}>{formatDateTime(time)}</p>}
                </div>
            </div>
        <div>{temperature && tempType && <p className={style.cityTemp}>{translateToCelcius(temperature, tempType).toFixed()}°</p>}</div>
        </div>
    )
}

export default CityCard