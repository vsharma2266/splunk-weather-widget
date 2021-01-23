import './styles/WeatherWidget.scss';

import {useEffect, useState} from 'react';
import {DailyWeather, HourlyWeather, Location, Conditions, Temperature, WeatherIcon} from './';

const WeatherWidget = ({location, weather}) => (
  <div className='weather-widget' role='region'>
    <Location location={location} weather={weather} />
    <WeatherIcon />
    <Temperature />
    <Conditions />
    <HourlyWeather />
    <DailyWeather />
  </div>
);

export default WeatherWidget;
