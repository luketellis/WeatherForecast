import React from "react";
import WeatherCard from "./WeatherCard";
import { capitalizeFirstLetter, convertUnixTimeToWeekday } from "../utils";

const WeatherCardList = ({weatherDays}) => {
  let weatherDaysArray = [];
  
  if (weatherDays && weatherDays.daily)
    weatherDaysArray = weatherDays.daily;

  return (
    <div>
      {weatherDaysArray.map((weatherDay, i) => {
        return (
          <WeatherCard
            key={i}
            id={weatherDay.id}
            icon={weatherDay.weather[0].icon}
            dt={convertUnixTimeToWeekday(weatherDay.dt)}
            min={weatherDay.temp.min}
            max={weatherDay.temp.max}
            description={capitalizeFirstLetter(
              weatherDay.weather[0].description
            )}
            humidity={weatherDay.humidity}
            clouds={weatherDay.clouds}
            windspeed={weatherDay.wind_speed}
          />
        );
      })}
    </div>
  );
};

export default WeatherCardList;
