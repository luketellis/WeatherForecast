import { MESSAGES } from "../config/constants";
import { getWeatherByGPS } from "../apis/weatherApis";

export async function searchForWeatherByGPS(
  lat,
  lon,
  setWeatherDays,
  setErrorMessage,
  setGraphUrl,
  setLoading
) {
  setErrorMessage("");
  console.log(`Searching for weather with lat: ${lat} lon: ${lon}`);

  try {
    setLoading(true);
    const response = await getWeatherByGPS(lat, lon);

    if (response.status === 404) {
      setWeatherDays([]);
      throw new Error(MESSAGES.WEATHER_NOT_FOUND);
    }
    if (response.status !== 200) {
      throw new Error(MESSAGES.API_ERROR);
    }

    const weather = response.data;
    setWeatherDays(weather);
    setErrorMessage("");
    setGraphUrl(`weather/fiveDayForecast?lat=${lat}&lon=${lon}`);
    setLoading(false);
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
}
