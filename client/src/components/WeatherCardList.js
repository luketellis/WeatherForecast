import React from "react";
import WeatherCard from "./WeatherCard";
import { capitalizeFirstLetter, convertUnixTimeToWeekday } from "../utils";

const WeatherCardList = (props) => {
  let weatherDaysArray = [];
  console.log(props.weatherDays);
  if (props.weatherDays && props.weatherDays.daily)
    weatherDaysArray = props.weatherDays.daily;

  return (
    <div>
      {weatherDaysArray.map((weatherDay, i) => {
        return (
          <WeatherCard
            key={i}
            id={weatherDaysArray[i].id}
            icon={weatherDaysArray[i].weather[0].icon}
            dt={convertUnixTimeToWeekday(weatherDaysArray[i].dt)}
            min={weatherDaysArray[i].temp.min}
            max={weatherDaysArray[i].temp.max}
            description={capitalizeFirstLetter(
              weatherDaysArray[i].weather[0].description
            )}
            humidity={weatherDaysArray[i].humidity}
            clouds={weatherDaysArray[i].clouds}
            windspeed={weatherDaysArray[i].wind_speed}
          />
        );
      })}
    </div>
  );
};

export default WeatherCardList;
