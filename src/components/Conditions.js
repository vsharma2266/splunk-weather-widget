import './styles/Conditions.scss';

import PropTypes from "prop-types";

const Conditions = ({weather}) => (
  <div className='conditions-container'>
    {/* <p>Precipitation: {weather.current.}</p> Didn't find this data point */}
    <p>Humidity: {weather.current.humidity}%</p>
    <p>Wind: {weather.current.wind_speed} mph</p>
  </div>
);

Conditions.propTypes = {
  weather: PropTypes.shape({
    current: PropTypes.shape({
      humidity: PropTypes.string,
      wind_speed: PropTypes.string
    })
  })
};

export default Conditions;
