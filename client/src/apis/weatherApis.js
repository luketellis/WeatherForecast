import axios from "axios";
import { MESSAGES, ENDPOINTS } from "../config/constants";

export const getCitiesBySearchTerm = async (searchTerm) => {
  try {
    if (!searchTerm) {
      throw new Error(MESSAGES.MISSING_ARGUMENT_ERROR);
    }

    const response = await axios.get(`${ENDPOINTS.CITIES}${searchTerm}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getWeatherByGPS = async (lat, lon) => {
  try {
    if (!lat || !lon) {
      throw new Error(MESSAGES.MISSING_ARGUMENT_ERROR);
    }

    const params = new URLSearchParams();

    params.append("lat", lat);
    params.append("lon", lon);

    const response = await axios.get(`${ENDPOINTS.WEATHER_BY_GPS}`, { params });
    return response;
  } catch (error) {
    throw error;
  }
};
