const express = require("express");
const path = require("path");

const weatherConroller = require(path.join(
  __dirname,
  "../controllers",
  "weatherController"
));

const router = express.Router();

// GET /weather/cities/:city http://localhost:3001/weather/cities/melbourne
router.get("/cities/:city", (req, res) => {
  const city = req.params.city;

  weatherConroller.getCitiesGivenName(city, 5, res);
});

// GET /weather/fiveDayForecast http://localhost:3001/weather/fiveDayForecast?lat=-37.8409357&lon=144.946457
router.get("/fiveDayForecast", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;

  weatherConroller.getFiveDayWeatherGivenLatLon(lat, lon, res);
});

// GET /weather/gps http://localhost:3001/weather/gps?lat=-37.8409357&lon=144.946457
router.get("/gps", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;

  weatherConroller.getWeatherGivenLatLon(lat, lon, res);
});

module.exports = { router };
