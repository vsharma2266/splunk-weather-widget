export function getGeoLocation() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      maximumAge: 60000,
      timeout: 5000,
      enableHighAccuracy: true
    })
  );
}

export function geoCoding({lat, long}) {
  if (!lat || !long) {
    return null;
  }
  const vendorURL = 'https://api.opencagedata.com/geocode/v1/json';
  const apiKey = '0264db5477fe4b1c9ee9ae23b3ec59e5';
  return fetch(`${vendorURL}?q=${lat},${long}&key=${apiKey}`)
    .then(response => response.json())
    .then(({results: [result]}) => result.components);
}
