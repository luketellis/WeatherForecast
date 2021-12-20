import React from "react";
import { MESSAGES } from "../config/constants";

export function searchForCities(searchField, setCities, setWeatherDays, setErrorMessage, searchForWeatherByGPS) {
    setErrorMessage("");
    console.log(`Searching for cities with name ${searchField}`);

    fetch(`weather/cities/${searchField}`)
      .then((response) => {
        if (response.status === 404) {
          setWeatherDays([]);
          throw new Error(MESSAGES.CITY_NOT_FOUND);
        }
        if (response.status !== 200) {
          throw new Error(MESSAGES.API_ERROR);
        }
        return response.json();
      })
      .then((cities) => {
        searchForFirstCityWeather(cities);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });

  function searchForFirstCityWeather(cities) {
        setCities(cities);
        if (cities.length) {
          searchForWeatherByGPS(cities[0].lat, cities[0].lon);
          setErrorMessage("");
        } else {
          throw new Error(MESSAGES.CITY_NOT_FOUND);
        }
      }
    }
