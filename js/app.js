const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config({ path: "./.env" });
const port = process.env.PORT;

const errorController = require("../controllers/errorController");
const weatherRoutes = require("../routes/weather");

const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/weather", weatherRoutes.router);

app.use(errorController.get404);

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
