export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertKelvinToCelsius(kelvinTemp) {
  kelvinTemp = parseFloat(kelvinTemp);

  const celsiusTemp = kelvinTemp > 0 ? kelvinTemp - 273.15 : 0;
  return Math.round(celsiusTemp * 10) / 10;
}

export function convertUTCToWeekday(utc) {
  let potentialDay = (Math.floor(utc / 86400) + 4) % 7;

  switch (potentialDay) {
    case 0:
      potentialDay = "Sunday";
      break;
    case 1:
      potentialDay = "Monday";
      break;
    case 2:
      potentialDay = "Tuesday";
      break;
    case 3:
      potentialDay = "Wednesday";
      break;
    case 4:
      potentialDay = "Thursday";
      break;
    case 5:
      potentialDay = "Friday";
      break;
    case 6:
      potentialDay = "Saturday";
      break;
    default:
      potentialDay = "Errorday";
  }

  return potentialDay;
}
