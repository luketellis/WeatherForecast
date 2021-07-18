const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config({ path: "./.env" });

const errorController = require("../controllers/error");
const weatherConroller = require("../controllers/weatherController");
const weatherRoutes = require("../routes/weather");

const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/index", function (req, res) {
  res.render("home");

  //res.sendFile(path.join(__dirname, "../", "index.html"));
});

app.get("/latlon", function (req, res) {
  const cityName = "Melbourne";
  const limit = 1;

  const cityWeather = weatherConroller.getWeatherGivenCityName(
    cityName,
    limit,
    res
  );
});

app.use("/weather", weatherRoutes.router);

// app.get("/weather/:city", function (req, res) {
//   console.log(req.params);
//   const city = req.params.city;
//   const limit = 1;

//   console.log(`CITY ${city}`);

//   const cityWeather = weatherConroller.getWeatherGivenCityName(
//     city,
//     limit,
//     res
//   );
// });

app.use(errorController.get404);

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
