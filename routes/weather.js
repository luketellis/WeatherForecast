const express = require("express");
const path = require("path");

const weatherConroller = require(path.join(
  __dirname,
  "../controllers",
  "weatherController"
));

const router = express.Router();

router.get("/weather", weatherConroller.getWeatherGivenLatLon);

// /weather/:city => GET
router.get("/:city", (req, res) => {
  const city = req.params.city;
  const limit = 1;

  weatherConroller.getWeatherGivenCityName(city, limit, res);
});

module.exports = { router };
