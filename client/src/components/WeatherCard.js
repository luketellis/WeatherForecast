import React from "react";

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
        alt="weather photo"
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
      />
      <div>
        <h2>{dt}</h2>
        <div>
          <span className="minTemp">
            <strong>Min: </strong>
            {parseFloat(min).toFixed(1)} °C
          </span>
          <span className="maxTemp">
            <strong>Max: </strong>
            {parseFloat(max).toFixed(1)} °C
          </span>
        </div>
        <br /> <br />
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
