import React from "react";

const CityDropdown = (props) => {
  const cities = props.cities || [];

  function searchForWeatherByGPS(event) {
    const selectedIndex = event.target.options.selectedIndex;
    const lat = event.target[selectedIndex].dataset.lat;
    const lon = event.target[selectedIndex].dataset.lon;
    props.searchForWeatherByGPS(lat, lon);
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
      {cities.length > 0 && (
        <select onChange={searchForWeatherByGPS}>
          {cities.map(mapCitiesToOptions)}
        </select>
      )}
    </div>
  );
};

export default CityDropdown;
