import React from "react";
import { Line } from "react-chartjs-2";
import { convertUnixTimeToWeekday, convertUnixTimeToHours } from "../utils";

const FiveDayWeatherGraph = ({ fiveDayWeather }) => {
  let data,
    options = [];

  console.log(`FDW ${JSON.stringify(fiveDayWeather)}`);

  if (fiveDayWeather.list) {
    let humidityArray = fiveDayWeather.list.map((a) => a.main.humidity);
    let labelArray = fiveDayWeather.list.map(
      (a) =>
        `${convertUnixTimeToWeekday(a.dt, "short")} ${convertUnixTimeToHours(
          a.dt
        )}`
    );
    let maxTempArray = fiveDayWeather.list.map((a) => a.main.temp_max);
    data = {
      labels: labelArray,

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
      <Line data={data} options={options} />
    </div>
  );
};

export default FiveDayWeatherGraph;
