import React, { useEffect, useState, useReducer } from "react";
import WeatherCardList from "../components/WeatherCardList";
import Searchbox from "../components/Searchbox";
import "../style.css";
import CityDropdown from "../components/CityDropdown";
import FiveDayWeatherGraph from "../components/FiveDayWeatherGraph";
import { MESSAGES } from "../config/constants";
import { searchForCities } from "../hooks/useSearchForCities";
import { useFetch } from "../hooks/useFetch";

function App() {
  const [cities, setCities] = useState([]);
  const [weatherDays, setWeatherDays] = useState([]);
  const [searchField, setSearchField] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [graphData, setGraphData] = useState([]);

  //const { loading, data, error } = useFetch(`weather/cities/${searchField}`);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  function searchForWeatherByGPS(lat, lon) {
    console.log(`Searching for weather with lat: ${lat} lon: ${lon}`);

    fetch(`weather/gps?lat=${lat}&lon=${lon}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(MESSAGES.API_ERROR);
        }
        return response.json();
      })
      .then((weather) => {
        setWeatherDays(weather);
        setErrorMessage("");
        searchForDailyWeatherGraphData(lat, lon);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  function searchForDailyWeatherGraphData(lat, lon) {
    fetch(`weather/fiveDayForecast?lat=${lat}&lon=${lon}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(MESSAGES.API_ERROR);
        }
        return response.json();
      })
      .then((fiveDayForecastData) => {
        setGraphData(fiveDayForecastData);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  function searchForCities() {
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
        setCities(cities);
        if (cities.length) {
          searchForWeatherByGPS(cities[0].lat, cities[0].lon);
          setErrorMessage("");
        } else {
          throw new Error(MESSAGES.CITY_NOT_FOUND);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div className="tc">
      <h1>Weather Forecast {searchField}</h1>
      <Searchbox searchChange={onSearchChange} />
      <div className="errorMsg">{errorMessage}</div>
      <br />
      <button onClick={searchForCities} disabled={!searchField}>
        Search
      </button>

      <br />
      <br />

      <CityDropdown
        cities={cities}
        searchForWeatherByGPS={searchForWeatherByGPS}
      />
      <br />
      <br />

      <WeatherCardList weatherDays={weatherDays} />
      <br />
      <FiveDayWeatherGraph graphData={graphData} />
    </div>
  );
}

export default App;
