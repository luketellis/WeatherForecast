import React from "react";
import { Line } from "react-chartjs-2";
import { convertUnixTimeToWeekday, convertUnixTimeToHours } from "../utils";

const FiveDayWeatherGraph = ({ graphData }) => {
  let data = [];

  if (!graphData) {
    return <div className="weatherGraph"></div>;
  }

  const convertWeatherDataIntoDateTimeArray = (weatherArray) => {
    return `${convertUnixTimeToWeekday(
      weatherArray.dt,
      "short"
    )} ${convertUnixTimeToHours(weatherArray.dt)}`;
  };

  if (graphData.list) {
    let humidityArray = graphData.list.map((array) => array.main.humidity);
    let xAxisDateTimeLabelArray = graphData.list.map((array) =>
      convertWeatherDataIntoDateTimeArray(array)
    );
    let maxTempArray = graphData.list.map((a) => a.main.temp_max);
    data = {
      labels: xAxisDateTimeLabelArray,

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
