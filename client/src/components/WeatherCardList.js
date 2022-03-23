import React from "react";
import WeatherCard from "./WeatherCard";
import { capitalizeFirstLetter, convertUnixTimeToWeekday } from "../utils";

const WeatherCardList = (props) => {
  const weatherDaysArray = props.weatherDays.daily || [];

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

// function searchForCities() {
//   setErrorMessage("");
//   console.log(`Searching for cities with name ${searchField}`);

//   fetch(`weather/cities/${searchField}`)
//     .then((response) => {
//       if (response.status === 404) {
//         setWeatherDays([]);
//         throw new Error(MESSAGES.CITY_NOT_FOUND);
//       }
//       if (response.status !== 200) {
//         throw new Error(MESSAGES.API_ERROR);
//       }
//       return response.json();
//     })
//     .then((cities) => {
//       setCities(cities);
//       if (cities.length) {
//         searchForWeatherByGPS(cities[0].lat, cities[0].lon);
//         setErrorMessage("");
//       } else {
//         throw new Error(MESSAGES.CITY_NOT_FOUND);
//       }
//     })
//     .catch((error) => {
//       setErrorMessage(error.message);
//     });
// }
