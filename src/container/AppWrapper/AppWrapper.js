import {useEffect, useState} from 'react';
import WeatherWidget from '../../components/WeatherWidget';
import {getGeoLocation, geoCoding} from '../../services/geoLocation';
import {getCurrentWeather} from '../../services/weather';

const AppWrapper = () => {
  const [currentCoordinates, setCurrentCoordinates] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    getGeoLocation()
      .then(location => ({
        lat: location.coords.latitude,
        long: location.coords.longitude
      }))
      .then(location => setCurrentCoordinates(location));
  }, []);

  useEffect(() => {
    if (currentCoordinates) {
      geoCoding(currentCoordinates).then(location => {
        setCurrentLocation(location);
      });
    }
  }, [currentCoordinates]);

  useEffect(() => {
    if (currentCoordinates) {
      getCurrentWeather(currentCoordinates).then(weather => setCurrentWeather(weather));
    }
  }, [currentCoordinates]);

  if (!currentLocation || !currentWeather) {
    return null;
  }

  return <WeatherWidget weather={currentWeather} location={currentLocation} />;
};

export default AppWrapper;
