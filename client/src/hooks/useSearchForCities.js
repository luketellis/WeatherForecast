import { MESSAGES } from "../config/constants";
import { getWeatherByGPS, getCitiesBySearchTerm } from "../apis/weatherApis";

export async function searchForCities(
  searchField,
  setCities,
  setWeatherDays,
  setErrorMessage,
  setLoading,
  setGraphUrl
) {
  setErrorMessage("");
  setWeatherDays([]);
  setGraphUrl("");
  console.log(`Searching for cities with name ${searchField}`);

  try {
    setLoading(true);
    const response = await getCitiesBySearchTerm(searchField);

    if (response.status === 404) {
      throw new Error(MESSAGES.CITY_NOT_FOUND);
    }
    if (response.status !== 200) {
      throw new Error(MESSAGES.API_ERROR);
    }

    const cities = response.data;
    searchForFirstCityWeather(cities);
    setLoading(false);
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }

  async function searchForFirstCityWeather(cities) {
    setCities(cities);
    if (cities.length) {
      const weatherDayData = await getWeatherByGPS(
        cities[0].lat,
        cities[0].lon
      );
      console.log(weatherDayData);
      setWeatherDays(weatherDayData.daily);
      setErrorMessage("");
    } else {
      setErrorMessage(MESSAGES.CITY_NOT_FOUND);
    }
  }
}
