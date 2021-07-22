const express = require("express");
const path = require("path");

const weatherConroller = require(path.join(
  __dirname,
  "../controllers",
  "weatherController"
));

const router = express.Router();

// GET /weather/cities http://localhost:3001/weather/cities/melbourne
router.get("/cities/:city", (req, res) => {
  const city = req.params.city;

  weatherConroller.getCitiesGivenName(city, 5, res);
});

// GET /weather/gps http://localhost:3001/weather/gps?lat=-37.8409357&lon=144.946457
router.get("/gps", (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;

  weatherConroller.getWeatherGivenLatLon(lat, lon, res);
});

// GET /weather/:city
router.get("/:city", (req, res) => {
  const city = req.params.city;
  const limit = 1;

  weatherConroller.getWeatherGivenCityName(city, limit, res);
});

module.exports = { router };
