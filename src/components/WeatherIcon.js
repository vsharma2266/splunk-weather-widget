import './styles/WeatherIcon.scss';

import PropTypes from 'prop-types';

const WeatherIcon = ({type}) => {
  // Didn't find documentation for possible types.
  const possibleWeathers = new Set(['clouds', 'clear', 'snow', 'rain']);
  let currentWeather = 'clear';
  if (possibleWeathers.has(type.toLowerCase())) {
    currentWeather = type.toLowerCase();
  }

  return (
    <img
      className='weather-icon'
      src={`/assets/images/${currentWeather}.png`}
      alt={currentWeather}
    />
  );
};

WeatherIcon.propTypes = {
  type: PropTypes.string
};

export default WeatherIcon;
