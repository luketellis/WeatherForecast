import { MESSAGES } from "../config/constants";
import { getWeatherByGPS, getCitiesBySearchTerm } from "../apis/weatherApis"

export async function searchForCities(searchField, setCities, setWeatherDays, setErrorMessage) {
    setErrorMessage("");
    console.log(`Searching for cities with name ${searchField}`);

    try {
    const response = await getCitiesBySearchTerm(searchField);

        if (response.status === 404) {
          setWeatherDays([]);
          throw new Error(MESSAGES.CITY_NOT_FOUND);
        }
        if (response.status !== 200) {
          throw new Error(MESSAGES.API_ERROR);
        }

        const cities = response.data;
        searchForFirstCityWeather(cities);
    }
      catch(error) {
        setErrorMessage(error.message);
      };

  async function searchForFirstCityWeather(cities) {
        setCities(cities);
        if (cities.length) {
          const weatherDayData = await getWeatherByGPS(cities[0].lat, cities[0].lon);
          console.log(weatherDayData);
          setWeatherDays(weatherDayData.daily);
          setErrorMessage("");
        } else {
          throw new Error(MESSAGES.CITY_NOT_FOUND);
        }
      }
    }
