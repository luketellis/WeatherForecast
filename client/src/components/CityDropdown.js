import React, { useEffect } from "react";

const CityDropdown = ({
  cities,
  searchForWeatherByGPS,
  setWeatherDays,
  setErrorMessage,
  searchForDailyWeatherGraphData,
  setLoading,
}) => {
  const cityArray = cities || [];

  useEffect(() => {
    if (cityArray.length) {
      searchForWeatherByGPS(
        cityArray[0].lat,
        cityArray[0].lon,
        setWeatherDays,
        setErrorMessage,
        searchForDailyWeatherGraphData,
        setLoading
      );
    }
  }, [cityArray]);

  function searchForWeather(event) {
    const selectedIndex = event.target.options.selectedIndex;
    const lat = event.target[selectedIndex].dataset.lat;
    const lon = event.target[selectedIndex].dataset.lon;
    searchForWeatherByGPS(
      lat,
      lon,
      setWeatherDays,
      setErrorMessage,
      searchForDailyWeatherGraphData,
      setLoading
    );
  }

  function generateOptionText(city) {
    const state = city.state ? `${city.state}, ` : ``;
    return `${city.name}, ${state} ${city.country}, ${city.lat}, ${city.lon}`;
  }

  const mapCitiesToOptions = (city, i) => {
    return (
      <option
        key={i}
        id={city.id}
        name={city.name}
        value={i}
        data-lat={city.lat}
        data-lon={city.lon}
      >
        {generateOptionText(city)}
      </option>
    );
  };

  return (
    <div>
      {cityArray.length > 0 && (
        <select onChange={searchForWeather}>
          {cityArray.map(mapCitiesToOptions)}
        </select>
      )}
    </div>
  );
};

export default CityDropdown;
