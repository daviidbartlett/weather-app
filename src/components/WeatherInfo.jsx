import React from "react";
import PropTypes from "prop-types";

const WeatherInfo = ({ cityName, mainTemp, maxTemp, minTemp, windSpeed, weatherDesc, sunrise, sunset, weatherIcon }) => {
  return (
    <div>
      <ul>
        <li>{cityName}</li>
        <li>Current temperature is: {mainTemp}°C</li>
        <li>Max temperature for today: {maxTemp}°C</li>
        <li>Min temperature for today: {minTemp}°C</li>
        <li>Windspeed is: {windSpeed}m/s</li>
        <li>The weather today is: {weatherDesc}</li>
        <li><img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt={weatherDesc}></img></li>
        <li>Sunrise is at: {sunrise}</li>
        <li>Sunset is at: {sunset}</li>
      </ul>
    </div>
  );
};

WeatherInfo.propTypes = {
  cityName: PropTypes.string.isRequired,
  mainTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  weatherDesc: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
  weatherIcon: PropTypes.string.isRequired
}

export default WeatherInfo;
