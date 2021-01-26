import './styles/Location.scss';

import PropTypes from 'prop-types';
import {days} from '../common/constants';

const Location = ({location, weather}) => {
  const {postcode, state_code, town, county} = location;
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const currentMeridian = hour >= 12 ? 'PM' : 'AM';
  const hr = hour > 12 ? hour - 12 : hour;
  const currentWeather = weather.current.weather[0].main;

  return (
    <div>
      <div className='location-address location-color'>
        {town || county}, {state_code} {postcode}
      </div>
      <div className='location-time location-color'>
        {days[day]} {hr || 12}:00 {currentMeridian}
      </div>
      <div
        aria-label={`Current weather is ${currentWeather}`}
        className='location-weather location-color'>
        {currentWeather}
      </div>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    country: PropTypes.string,
    county: PropTypes.string,
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
