const fetch = require("node-fetch");
const baseUrl = "https://api.openweathermap.org";
const apiKey = process.env.OPEN_WEATHER_API_KEY;

exports.getLatLonGivenCityName = (cityName, limit, res) => {
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
        .send(JSON.stringify(`Something Went Wrong :(<br\> ${err}`));
    });
};

exports.getWeatherGivenLatLon = (lat, lon, res) => {
  getJSONFromEndpoint(
    `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`,
    `Can't find country with coordinates '${lat} ${lon}`
  )
    .then((data) => {
      res.status(200).send(`${JSON.stringify(data)}`);
    })
    .catch((err) => {
      res
        .status(404)
        .send(JSON.stringify(`Something Went Wrong :(<br\> ${err}`));
    });
};

exports.getWeatherGivenCityName = (cityName, limit, res) => {
  getJSONFromEndpoint(
    `${baseUrl}/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`,
    `Error finding city weather infromation given City Name: ${cityName} Limit: ${limit}`
  )
    .then((data) => {
      //check if response data was empty array and throw error if it is
      if (data && !data.length) {
        throw new Error("Cant find a location with given input");
      }
      return getJSONFromEndpoint(
        `${baseUrl}/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`,
        `Can't find country with coordinates '${data[0].lat} ${data[0].lon}`
      );
    })
    .then((data) => {
      res.status(200).send(`${JSON.stringify(data)}`);
    })
    .catch((err) => {
      res
        .status(404)
        .send(JSON.stringify(`Something Went Wrong :(<br\> ${err}`));
    });
};

const getJSONFromEndpoint = (url, errMsg = "Something Went Wrong!") => {
  return fetch(`${url}`).then((response) => {
    if (response.status == 200) {
      return response.json();
    }
    throw new Error(`${errMsg} ${response.status}`);
  });
};
