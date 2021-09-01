const fetch = require("node-fetch");
const baseUrl = process.env.OPEN_WEATHER_API_BASE_URL;
const apiKey = process.env.OPEN_WEATHER_API_KEY;
const excludeValues = "current,minutely,hourly,alerts";
const { MESSAGES } = require("../util/constants");

exports.getCitiesGivenName = (cityName, limit, res) => {
  getJSONFromEndpoint(
    `${baseUrl}/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`,
    `Error finding city weather infromation given City Name: ${cityName} Limit: ${limit}`
  )
    .then((data) => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch((err) => {
      res
        .status(404)
        .send(JSON.stringify(`${MESSAGES.GENERIC_ERROR} <br\> ${err}`));
    });
};

exports.getWeatherGivenLatLon = (lat, lon, res) => {
  getJSONFromEndpoint(
    `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${excludeValues}&units=metric&appid=${apiKey}`,
    `Can't find country with coordinates '${lat} ${lon}`
  )
    .then((data) => {
      res.status(200).send(`${JSON.stringify(data)}`);
    })
    .catch((err) => {
      res
        .status(404)
        .send(JSON.stringify(`${MESSAGES.GENERIC_ERROR} <br\> ${err}`));
    });
};

exports.getFiveDayWeatherGivenLatLon = (lat, lon, res) => {
  getJSONFromEndpoint(
    `${baseUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
    `Can't find country with coordinates '${lat} ${lon}`
  )
    .then((data) => {
      res.status(200).send(`${JSON.stringify(data)}`);
    })
    .catch((err) => {
      res
        .status(404)
        .send(JSON.stringify(`${MESSAGES.GENERIC_ERROR} <br\> ${err}`));
    });
};

const getJSONFromEndpoint = (url, errMsg = `${MESSAGES.GENERIC_ERROR}`) => {
  return fetch(`${url}`).then((response) => {
    if (response.status == 200) {
      return response.json();
    }
    throw new Error(`${errMsg} ${response.status}`);
  });
};
