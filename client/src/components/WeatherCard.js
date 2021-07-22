import React from "react";
import { OPEN_WEATHER_ICONS_URL, TEMP_UNITS } from "../config/constants";

const WeatherCard = ({
  id,
  icon,
  dt,
  min,
  max,
  description,
  humidity,
  clouds,
  windspeed,
}) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2">
      <img
        alt="weather icon"
        src={`${OPEN_WEATHER_ICONS_URL}/${icon}@4x.png`}
      />
      <div>
        <h2>{dt}</h2>
        <div>
          <span className="floatLeft">
            <strong>Min: </strong>
            <span className="minTemp">
              {parseFloat(min).toFixed(1)} {TEMP_UNITS.CELSIUS}
            </span>
          </span>
          <span className="floatRight">
            <strong>Max: </strong>
            <span className="maxTemp">
              {parseFloat(max).toFixed(1)} {TEMP_UNITS.CELSIUS}
            </span>
          </span>
        </div>
        <br />
        <br />
        <div className="textAlignLeft">
          <span>
            <strong>Description: </strong>
            {description}
          </span>
        </div>
        <div className="textAlignLeft">
          <span>
            <strong>Humidity: </strong>
            {humidity}
          </span>
        </div>
        <div className="textAlignLeft">
          <span>
            <strong>Clouds: </strong>
            {clouds}
          </span>
        </div>
        <div className="textAlignLeft">
          <span>
            <strong>Windspeed: </strong>
            {windspeed}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
