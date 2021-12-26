import React, { useEffect } from "react";

const CityDropdown = ({cities = [], searchForWeatherByGPS, setErrorMessage,
  setWeatherDays, searchForDailyWeatherGraphData}) => {

    useEffect(() => {
      if (cities.length) {
        searchForWeatherByGPS(cities[0].lat, cities[0].lon, setWeatherDays, setErrorMessage, searchForDailyWeatherGraphData);
      }
    }, [cities])

  function searchForWeather(event) {
    const selectedIndex = event.target.options.selectedIndex;
    const lat = event.target[selectedIndex].dataset.lat;
    const lon = event.target[selectedIndex].dataset.lon;
    searchForWeatherByGPS(lat, lon, setWeatherDays, setErrorMessage, searchForDailyWeatherGraphData);
  }

  function generateOptionText(city) {
    const state = city.state ? `${city.state}, ` : ``;
    return `${city.name}, ${state} ${city.country}, ${city.lat}, ${city.lon}`;
  }

  const mapCitiesToOptions = (city, i) => {
    return (
      <option
        key={i}
        id={cities[i].id}
        name={cities[i].name}
        value={i}
        data-lat={cities[i].lat}
        data-lon={cities[i].lon}
      >
        {generateOptionText(city)}
      </option>
    );
  };

  return (
    <div>
      {cities.length > 0 && (
        <select onChange={searchForWeather} >
          {cities.map(mapCitiesToOptions)}
        </select>
      )}
    </div>
  );
};

export default CityDropdown;
