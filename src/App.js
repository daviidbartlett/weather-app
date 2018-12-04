import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import CityInput from "./components/CityInput";
import WeatherInfo from "./components/WeatherInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CityInput />
        <WeatherInfo />
      </div>
    );
  }
}

export default App;
