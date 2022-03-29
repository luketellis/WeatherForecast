import React, { useState } from "react";
import WeatherCardList from "../components/WeatherCardList";
import Searchbox from "../components/Searchbox";
import "../style.css";
import CityDropdown from "../components/CityDropdown";
import FiveDayWeatherGraph from "../components/FiveDayWeatherGraph";
import { searchForCities } from "../hooks/useSearchForCities";
import { searchForWeatherByGPS } from "../hooks/useSearchForWeatherByGps";
import { Loader } from "../components/Loader";

function App() {
  const [cities, setCities] = useState([]);
  const [weatherDays, setWeatherDays] = useState([]);
  const [searchFieldText, setSearchFieldText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [graphUrl, setGraphUrl] = useState(null);

  const onSearchChange = (event) => {
    setSearchFieldText(event.target.value);
  };
  return (
    <div className="tc">
      <h1>Weather Forecast</h1>
      <Searchbox searchChange={onSearchChange} />
      <div className="errorMsg">{errorMessage}</div>
      <br />
      <button
        onClick={() => {
          searchForCities(
            searchFieldText,
            setCities,
            setWeatherDays,
            setErrorMessage,
            setLoading,
            setGraphUrl
          );
        }}
        disabled={!searchFieldText || loading}
      >
        Search
      </button>
      <br />
      <br />
      <CityDropdown
        cities={cities}
        searchForWeatherByGPS={searchForWeatherByGPS}
        setErrorMessage={setErrorMessage}
        setWeatherDays={setWeatherDays}
        setGraphUrl={setGraphUrl}
        setLoading={setLoading}
      />
      <br />
      {loading ? (
        <Loader src="sun.png" />
      ) : (
        <>
          <WeatherCardList weatherDays={weatherDays} />

          <br />
          <FiveDayWeatherGraph graphUrl={graphUrl} />
        </>
      )}
    </div>
  );
}

export default App;
