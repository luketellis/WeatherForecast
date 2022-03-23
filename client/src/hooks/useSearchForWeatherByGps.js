import { MESSAGES } from "../config/constants";
import { getWeatherByGPS } from "../apis/weatherApis"

export async function searchForWeatherByGPS(lat, lon, setWeatherDays, setErrorMessage, searchForDailyWeatherGraphData) {
    setErrorMessage("");
    console.log(`Searching for weather with lat: ${lat} lon: ${lon}`);
    
    try {
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
        searchForDailyWeatherGraphData(lat, lon);

    }
      catch(error) {
        setErrorMessage(error.message);
      };
    }
