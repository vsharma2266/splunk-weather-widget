import {useEffect, useState} from 'react';
import {getGeoLocation, geoCoding} from '../../services/geoLocation';
import {getCurrentWeather} from '../../services/weather';

const AppWrapper = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    getGeoLocation()
      .then(location => ({
        lat: location.coords.latitude,
        long: location.coords.longitude
      }))
      .then(location => setCurrentLocation(location));
  }, []);

  useEffect(() => {
    if (currentLocation) {
      geoCoding(currentLocation).then(location => {
        console.log(location);
      });
    }
  }, [currentLocation]);

  useEffect(() => {
    if (currentLocation) {
      getCurrentWeather(currentLocation).then(weather => console.log(weather));
    }
  }, [currentLocation]);

  return <div>Weather app</div>;
};

export default AppWrapper;
