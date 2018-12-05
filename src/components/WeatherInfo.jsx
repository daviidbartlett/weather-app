import React from "react";
import PropTypes from "prop-types";

const WeatherInfo = ({
  cityName,
  mainTemp,
  maxTemp,
  minTemp,
  windSpeed,
  weatherDesc,
  sunrise,
  sunset,
  weatherIcon
}) => {
  return (
    <span id="item">
      <p id="city">{cityName}</p>
      <img
        src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
        alt={weatherDesc}
      />
      <p id="temp">Current temperature is: {mainTemp}°C</p>
      <p>Max temperature for today: {maxTemp}°C</p>
      <p>Min temperature for today: {minTemp}°C</p>
      <p>Windspeed is: {windSpeed}m/s</p>
      <p>The weather today is: {weatherDesc}</p>
      <p id="icon" />
      <p>Sunrise is at: {sunrise}</p>
      <p>Sunset is at: {sunset}</p>
    </span>
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
};

export default WeatherInfo;
