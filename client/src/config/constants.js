export const BASE_URL = process.env.BASE_URL;

export const OPEN_WEATHER_ICONS_URL = "http://openweathermap.org/img/wn/";

export const MESSAGES = {
  CITY_NOT_FOUND: "No cities found with provided search term.",
  CITY_NAME_EMPTY: "City name cannot be empty.",
  API_ERROR: "The API service is currently down. Please try again later.",
  WEATHER_NOT_FOUND: "No weather found with the provided coordinates",
  MISSING_ARGUMENT_ERROR:
    "Neccessary arguments were not provided to internal method",
};

export const TEMP_UNITS = {
  CELSIUS: "℃",
  FAHRENHEIT: "F",
  KELVIN: "K",
};

export const ENDPOINTS = {
  CITIES: "weather/cities/",
  WEATHER_BY_GPS: "weather/gps",
};
