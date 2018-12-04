import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import apiKey from "./config/index";
import Header from "./components/Header";
import CityInput from "./components/CityInput";
import WeatherInfo from "./components/WeatherInfo";

class App extends Component {
  state = {
    weatherResponse: {}
  };
  render() {
    return (
      <div className="App">
        <Header />
        <CityInput getWeatherByCity={this.getWeatherByCity} />
        <WeatherInfo />
      </div>
    );
  }
  getWeatherByCity = async (cityParam) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityParam},uk&APPID=${apiKey}`
    );
    console.log(response);
  };
}

export default App;
