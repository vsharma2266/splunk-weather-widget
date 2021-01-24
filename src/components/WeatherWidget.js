import './styles/WeatherWidget.scss';
import PropTypes from 'prop-types';
import {useState, useCallback} from 'react';

import {DailyWeather, HourlyWeather, Location, Conditions, Temperature, WeatherIcon} from './';
import {scales} from '../common/constants';

const WeatherWidget = ({location, weather}) => {
  const [currentScale, setScale] = useState([scales.celsius, scales.fahrenheit]);

  const onClickScale = useCallback(
    e => {
      e.preventDefault();
      setScale([currentScale[1], currentScale[0]]);
    },
    [currentScale]
  );

  return (
    <div className='weather-widget' role='region'>
      <Location location={location} weather={weather} />
      <div className='weather-widget-weather-conditions'>
        <div>
          <div className='weather-widget-current-weather'>
            <div className='weather-widget-icon'>
              <WeatherIcon type={weather.current.weather[0].main} />
            </div>
            <Temperature
              temp={weather.current.temp}
              onClickScale={onClickScale}
              currentScale={currentScale}
            />
          </div>
        </div>
        <div className='weather-widget-conditions'>
          <Conditions weather={weather} />
        </div>
      </div>
      <HourlyWeather />
      <div className='weather-widget-daily-weather'>
        {weather.daily.map(day => (
          <DailyWeather currentScale={currentScale} weather={day} key={day.dt} />
        ))}
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  location: PropTypes.object,
  weather: PropTypes.shape({
    current: PropTypes.shape({
      temp: PropTypes.number,
      weather: PropTypes.array
    }),
    daily: PropTypes.array
  })
};

export default WeatherWidget;
