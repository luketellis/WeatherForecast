import React, { useState, useEffect } from "react";
import WeatherCardList from "../components/WeatherCardList";
import Searchbox from "../components/Searchbox";
import "../style.css";
import CityDropdown from "../components/CityDropdown";

function App() {
  const [cities, setCities] = useState([]);
  const [weatherDays, setWeatherDays] = useState([]);
  const [searchfield, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  function searchForWeatherByGPS(lat, lon) {
    console.log(
      `searching for weather with GPS values lat: ${lat} lon: ${lon}`
    );
    //fetch(`weather/${searchfield}`) /weather/gps?lat=-37.814&lon=144.9633
    fetch(`weather/gps?lat=${lat}&lon=${lon}`)
      .then((response) => response.json())
      .then((weather) => {
        setWeatherDays(weather);
      });
  }

  function searchForCityWeather(lat, lon) {
    console.log(`searching for city weather ${searchfield}`);
    fetch(`weather/${searchfield}`)
      .then((response) => response.json())
      .then((weather) => {
        setWeatherDays(weather);
      });
  }

  function searchForCities() {
    console.log(`searching for cities ${searchfield}`);
    fetch(`weather/cities/${searchfield}`)
      .then((response) => response.json())
      .then((cities) => {
        setCities(cities);
      });
  }

  return (
    <div className="tc">
      <h1>Weather Forcast {searchfield}</h1>
      <Searchbox searchChange={onSearchChange} />

      <br />
      <button
        onClick={() => {
          searchForCities();
        }}
      >
        Search
      </button>

      <br />
      <br />

      <CityDropdown
        cities={cities}
        searchForWeatherByGPS={searchForWeatherByGPS}
      />

      <br />

      <WeatherCardList weatherDays={weatherDays} />
    </div>
  );
}

export default App;
