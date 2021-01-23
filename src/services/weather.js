export function getCurrentWeather({lat, long}) {
  if (!lat || !long) {
    return null;
  }
  const vendorURL = 'https://api.openweathermap.org/data/2.5/onecall';
  const apiKey = '524589f12ff60e2a150e470595208862';
  return fetch(`${vendorURL}?lat=${lat}&lon=${long}&appid=${apiKey}`).then(response =>
    response.json()
  );
}
