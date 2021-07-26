import React from "react";
import { Line } from "react-chartjs-2";
import { convertUnixTimeToWeekday, convertUnixTimeToHours } from "../utils";

const FiveDayWeatherGraph = ({ fiveDayWeather }) => {
  let data = [];

  if (!fiveDayWeather) {
    fiveDayWeather = [];
  }

  console.log(`FDW ${JSON.stringify(fiveDayWeather)}`);

  const convertWeatherDataIntoDateTimeArray = (weatherArray) => {
    return `${convertUnixTimeToWeekday(
      weatherArray.dt,
      "short"
    )} ${convertUnixTimeToHours(weatherArray.dt)}`;
  };

  if (fiveDayWeather.list) {
    let humidityArray = fiveDayWeather.list.map((array) => array.main.humidity);
    let xAxisDateTimeLabel = fiveDayWeather.list.map((array) =>
      convertWeatherDataIntoDateTimeArray(array)
    );
    let maxTempArray = fiveDayWeather.list.map((a) => a.main.temp_max);
    data = {
      labels: xAxisDateTimeLabel,

      datasets: [
        {
          label: "Max Temperature",
          data: maxTempArray,
          fill: true,
          backgroundColor: "rgba(255, 0, 0, .4)",
          borderColor: "red",
        },
        {
          label: "Humidity",
          data: humidityArray,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "white",
        },
      ],
    };
  }

  return (
    <div className="weatherGraph">
      <Line data={data} />
    </div>
  );
};

export default FiveDayWeatherGraph;
