import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import apiKey from "./config/index";
import Header from "./components/Header";
import CityInput from "./components/CityInput";
import WeatherInfo from "./components/WeatherInfo";
import Map from "./components/Map";

class App extends Component {
  state = {
    cityName: "city name",
    mainTemp: 0,
    maxTemp: 0,
    minTemp: 0,
    windSpeed: 0,
    weatherDesc: "",
    sunrise: "",
    sunset: "",
    weatherIcon: "01d",
    coords: [0, 0]
  };
  render() {
    const {
      cityName,
      mainTemp,
      maxTemp,
      minTemp,
      windSpeed,
      weatherDesc,
      sunrise,
      sunset,
      weatherIcon,
      coords
    } = this.state;
    return (
      <div className="App">
        <Header />
        <div id="container">
          <CityInput getWeatherByCity={this.getWeatherByCity} />
          <WeatherInfo
            cityName={cityName}
            mainTemp={mainTemp}
            maxTemp={maxTemp}
            minTemp={minTemp}
            windSpeed={windSpeed}
            weatherDesc={weatherDesc}
            sunrise={sunrise}
            sunset={sunset}
            weatherIcon={weatherIcon}
          />
          <Map coords={coords} addNewState={this.addNewState} />
        </div>
      </div>
    );
  }

  toTimeString = (seconds) => {
    const timeConverter = new Date(seconds * 1000)
      .toUTCString()
      .match(/(\d\d:\d\d:\d\d)/)[0];
    return timeConverter.slice(0, 5);
  };

  getWeatherByCity = async (cityParam) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityParam},uk&APPID=${apiKey}`
    );
    const {
      name,
      main: { temp, temp_max, temp_min },
      wind: { speed },
      weather,
      sys: { sunrise, sunset },
      coord: { lon, lat }
    } = response.data;
    const cityNameRes = name;
    const mainTempRes = Math.round(temp - 273.15);
    const maxTempRes = Math.round(temp_max - 273.15);
    const minTempRes = Math.round(temp_min - 273.15);
    const windSpeedRes = speed;
    const weatherDescRes = weather[0].description;
    const sunriseRes = this.toTimeString(sunrise);
    const sunsetRes = this.toTimeString(sunset);
    const weatherIconRes = weather[0].icon;
    const lonRes = lon;
    const latRes = lat;

    this.setState({
      cityName: cityNameRes,
      mainTemp: mainTempRes,
      maxTemp: maxTempRes,
      minTemp: minTempRes,
      windSpeed: windSpeedRes,
      weatherDesc: weatherDescRes,
      sunrise: sunriseRes,
      sunset: sunsetRes,
      weatherIcon: weatherIconRes,
      coords: [+latRes, +lonRes]
    });
  };
  addNewState = (thing) => {
    console.log("XXXXXXXXX", thing);
  };

  onMapClick = () => {
    this.map.on("click", function(e) {
      alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
    });
  };
}

export default App;
