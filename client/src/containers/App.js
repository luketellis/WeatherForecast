import React, { useState, useEffect } from "react";
import WeatherCardList from "../components/WeatherCardList";
import Searchbox from "../components/Searchbox";
import "../style.css";

function App() {
  const [weatherDays, setWeatherDays] = useState([]);
  const [searchfield, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  function searchForCity() {
    fetch(`weather/${searchfield}`)
      .then((response) => response.json())
      .then((users) => {
        setWeatherDays(users);
      });
  }

  return (
    <div className="tc">
      <h1>Weather Forcast {searchfield}</h1>
      <Searchbox searchChange={onSearchChange} />
      <button
        onClick={() => {
          searchForCity();
        }}
      >
        Search
      </button>
      <br />

      <WeatherCardList weatherDays={weatherDays} />
    </div>
  );
}

export default App;
