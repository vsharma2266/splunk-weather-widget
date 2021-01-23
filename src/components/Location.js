import './styles/Location.scss';

import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';

const Location = ({location, weather}) => {
  const {postcode, state_code, town, country} = location;
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentMeridian = hour >= 12 ? 'PM' : 'AM';
  const hr = hour > 12 ? hour - 12 : hour;
  const currentWeather = weather.current.weather[0].main;

  return (
    <>
      <div className='location-address location-color'>
        {town}, {state_code} {postcode}
      </div>
      <div className='location-time location-color'>
        {days[day]} {hr || 12}:00 {currentMeridian}
      </div>
      <div className='location-weather location-color'>{currentWeather}</div>
    </>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    country: PropTypes.string,
    postcode: PropTypes.string,
    state_code: PropTypes.string,
    town: PropTypes.string
  }),
  weather: PropTypes.shape({
    current: PropTypes.shape({
      weather: PropTypes.array
    })
  })
};

export default Location;
