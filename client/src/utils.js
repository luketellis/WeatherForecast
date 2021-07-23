export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertKelvinToCelsius(kelvinTemp) {
  kelvinTemp = parseFloat(kelvinTemp);

  const celsiusTemp = kelvinTemp > 0 ? kelvinTemp - 273.15 : 0;
  return Math.round(celsiusTemp * 10) / 10;
}

export function convertUnixTimeToWeekday(utc, weekdayFormat = "long") {
  return new Date(utc * 1000).toLocaleString("en-au", {
    weekday: weekdayFormat,
  });
}

export function convertUnixTimeToHours(unixTime) {
  return new Date(unixTime * 1e3).toISOString().slice(-13, -5);
}
