import './styles/Location.scss';

import PropTypes from 'prop-types';

const Location = ({location, weather}) => {
  const {postcode, state_code, town} = location;
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentMeridian = hour >= 12 ? 'PM' : 'AM';
  const hr = hour > 12 ? hour - 12 : hour;
  const currentWeather = weather.current.weather[0].main;

  return (
    <div>
      <div className='location-address location-color'>
        {town}, {state_code} {postcode}
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
