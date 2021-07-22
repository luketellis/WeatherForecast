import React, { useState } from "react";
import WeatherCardList from "../components/WeatherCardList";
import Searchbox from "../components/Searchbox";
import "../style.css";
import CityDropdown from "../components/CityDropdown";

function App() {
  const [cities, setCities] = useState([]);
  const [weatherDays, setWeatherDays] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  function searchForWeatherByGPS(lat, lon) {
    console.log(`Searching for weather with lat: ${lat} lon: ${lon}`);
    fetch(`weather/gps?lat=${lat}&lon=${lon}`)
      .then((response) => response.json())
      .then((weather) => {
        setWeatherDays(weather);
      });
  }

  function searchForCities() {
    setErrorMessage("");
    console.log(`Searching for cities with name ${searchfield}`);
    fetch(`weather/cities/${searchfield}`)
      .then((response) => response.json())
      .then((cities) => {
        setCities(cities);
        if (cities.length > 0) {
          searchForWeatherByGPS(cities[0].lat, cities[0].lon);
        } else {
          setErrorMessage("No cities found with provided search term");
          setWeatherDays([]);
        }
      });
  }

  return (
    <div className="tc">
      <h1>Weather Forcast {searchfield}</h1>
      <Searchbox searchChange={onSearchChange} />
      <div className="errorMsg">{errorMessage}</div>
      <br />
      <button
        onClick={() => {
          searchForCities();
        }}
        disabled={!searchfield}
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
      <br />

      <WeatherCardList weatherDays={weatherDays} />
    </div>
  );
}

export default App;
