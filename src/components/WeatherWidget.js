import PropTypes from 'prop-types';
import './styles/WeatherWidget.scss';

import {DailyWeather, HourlyWeather, Location, Conditions, Temperature, WeatherIcon} from './';

const WeatherWidget = ({location, weather}) => (
  <div className='weather-widget' role='region'>
    <Location location={location} weather={weather} />
    <div className='weather-widget-weather-conditions'>
      <div>
        <div className='weather-widget-current-weather'>
          <div className='weather-widget-icon'>
            <WeatherIcon type={weather.current.weather[0].main} />
          </div>
          <Temperature temp={weather.current.temp} />
        </div>
      </div>
      <div>
        <Conditions weather={weather} />
      </div>
    </div>
    <HourlyWeather />
    <DailyWeather />
  </div>
);

WeatherWidget.propTypes = {
  location: PropTypes.object,
  weather: PropTypes.shape({
    current: PropTypes.shape({
      weather: PropTypes.array,
      temp: PropTypes.number
    })
  })
};

export default WeatherWidget;
