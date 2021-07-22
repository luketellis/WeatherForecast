export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertKelvinToCelsius(kelvinTemp) {
  kelvinTemp = parseFloat(kelvinTemp);

  const celsiusTemp = kelvinTemp > 0 ? kelvinTemp - 273.15 : 0;
  return Math.round(celsiusTemp * 10) / 10;
}

export function convertUTCToWeekday(utc) {
  return new Date(utc * 1000).toLocaleString("en-au", { weekday: "long" });
}
