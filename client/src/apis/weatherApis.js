import axios from 'axios';
import { ENDPOINTS } from '../config/constants';

export const getCitiesBySearchTerm = async (searchTerm) => {
	try {
		if (!searchTerm) {
            throw new Error();
		}
		const response = await axios.get(`${ENDPOINTS.CITIES}${searchTerm}`);
        console.log(response);
		return response;
	} catch (error) {
		throw error;
	}
};

export const getWeatherByGPS = async (lat, lon) => {
	try {
		if (!lat || !lon) {
            throw new Error();
		}

        const params = new URLSearchParams();

		params.append('lat', lat);
		params.append('lon', lon);

		const response = await axios.get(`${ENDPOINTS.WEATHER_BY_GPS}`, { params });
        console.log(response);
		return response;
	} catch (error) {
		throw error;
	}
};