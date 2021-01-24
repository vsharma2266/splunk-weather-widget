import './styles/DailyWeather.scss';

import PropTypes from 'prop-types';
import {WeatherIcon} from '.';
import {kelvin2CAndF} from '../utils/temperature';
import {days} from '../common/constants';

const DailyWeather = ({weather, currentScale}) => {
  const type = weather.weather[0].main;
  const {max, min} = weather.temp;
  const day = new Date(weather.dt * 1000).getDay();
  const dayMax = kelvin2CAndF(max)[currentScale[0]];
  const dayMin = kelvin2CAndF(min)[currentScale[0]];
  return (
    <div
      className='daily-weather-container'
      aria-label={`Weather will be ${type} on ${day} with maximum temperature of ${dayMax} and minimum of ${dayMin}.`}>
      <p>{days[day]}</p>
      <WeatherIcon type={type} />
      <div>
        {dayMax}° {dayMin}°
      </div>
    </div>
  );
};

DailyWeather.propTypes = {
  currentScale: PropTypes.array,
  weather: PropTypes.shape({
    dt: PropTypes.number,
    temp: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number
    }),
    weather: PropTypes.array
  })
};

export default DailyWeather;
